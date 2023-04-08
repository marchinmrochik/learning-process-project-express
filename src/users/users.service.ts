import { injectable } from 'inversify';
import { UserLoginDTO } from './dto/user-login.dto';
import { UserRegisterDTO } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';
import 'reflect-metadata';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, password, name }: UserRegisterDTO): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);

		return null;
	}

	async validateUser({}: UserLoginDTO): Promise<boolean> {
		return true;
	}
}
