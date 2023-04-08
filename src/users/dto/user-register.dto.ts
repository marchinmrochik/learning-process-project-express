import { IsEmail, IsString } from "class-validator";


export class UserRegisterDTO {
  @IsEmail({}, { message: "Email wrong!" })
  email: string;

  @IsString({ message: "Password required!" })
  password: string;

  @IsString({ message: "Name required!" })
  name: string;
}