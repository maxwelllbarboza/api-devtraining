import { IsEmail } from "class-validator";

export class CreateUserDto {

  @Is
  name: string;

  @IsEmail
  email: string;
  admin: boolean;
}
