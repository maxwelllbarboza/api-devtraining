import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {

  @IsString
  @Is
  name: string;

  @IsEmail
  email: string;
  admin: boolean;
}
