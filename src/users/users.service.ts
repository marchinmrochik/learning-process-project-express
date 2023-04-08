import { inject, injectable } from 'inversify';
import { UserLoginDTO } from './dto/user-login.dto';
import { UserRegisterDTO } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';
import 'reflect-metadata';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}

	async createUser({ email, password, name }: UserRegisterDTO): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		
		await newUser.setPassword(password, Number(salt)); 

		return null;
	}

	async validateUser({}: UserLoginDTO): Promise<boolean> {
		return true;
	}
}
