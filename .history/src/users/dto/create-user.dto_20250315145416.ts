import { IsEmail } from "class-validator";

export class CreateUserDto {

  @IsD
  name: string;

  @IsEmail
  email: string;
  admin: boolean;
}
