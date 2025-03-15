import { IsEmail } from "class-validator";

export class CreateUserDto {

  @IsEmail
  name: string;

  email: string;
  admin: boolean;
}
