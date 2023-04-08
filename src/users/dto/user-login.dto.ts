import { IsEmail, IsString } from 'class-validator';

export class UserLoginDTO {
	@IsEmail({}, { message: 'Email wrong!' })
	email: string;

	@IsString({ message: 'Password required!' })
	password: string;
}
