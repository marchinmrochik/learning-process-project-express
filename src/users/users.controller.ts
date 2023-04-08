import { BaseController } from '../common/base.controller';
import { Response, Request, NextFunction } from 'express';
import { HTTPError } from '../errors/http-error.class';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import { IUserController } from './users.controller.interface';
import 'reflect-metadata';
import { UserLoginDTO } from './dto/user-login.dto';
import { UserRegisterDTO } from './dto/user-register.dto';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/register',
				method: 'post',
				func: this.register,
			},
			{
				path: '/login',
				method: 'post',
				func: this.login,
			},
		]);
	}

	login(req: Request<{}, {}, UserLoginDTO>, res: Response, next: NextFunction): void {
		console.log(req.body);
		next(new HTTPError(401, 'error auth', 'login'));
	}

	register(req: Request<{}, {}, UserRegisterDTO>, res: Response, next: NextFunction): void {
		console.log(req.body); 
		this.ok(res, 'register');
	}
}
