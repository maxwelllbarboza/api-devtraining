import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @IsOptional()
  id?: number; // Define the type for `id` explicitly, assuming it's a number.

  @IsString({ message: 'O nome deve ser uma string.' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  name: string;

  @IsEmail({}, { message: 'O e-mail deve ser válido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email: string;

  @IsBoolean({
    message: "O campo 'admin' deve ser um booleano (true ou false).",
  })
  admin: boolean;

  constructor(user: UserEntity) {
    this.name = user.name;
    this.email = user.email;
    this.admin = user.admin;
    if (user.id) {
      this.id = user.id; // Optionally set the id if available
    }
  }

  // Static method to handle mapping an array of users to CreateUserDto
  static fromUsers(users: UserEntity[]): CreateUserDto[] {
    return users.map((user) => new CreateUserDto(user));
  }
}
