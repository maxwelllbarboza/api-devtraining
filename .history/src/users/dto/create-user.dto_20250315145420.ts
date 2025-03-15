import { IsEmail } from "class-validator";

export class CreateUserDto {

  @IsS
  name: string;

  @IsEmail
  email: string;
  admin: boolean;
}
