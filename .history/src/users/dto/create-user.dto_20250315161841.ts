import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
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
  }
}
