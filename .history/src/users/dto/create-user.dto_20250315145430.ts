import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {

  @IsString
  @IsN
  name: string;

  @IsEmail
  email: string;
  admin: boolean;
}
