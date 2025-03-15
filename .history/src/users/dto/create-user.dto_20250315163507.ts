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
  id?: number; // O id será opcional para cada instância do DTO

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

  constructor(users: UserEntity[]) {
    this.id = users[0]?.id;


    this.name = users.map((user) => user.name).join(', ');
    this.email = users.map((user) => user.email).join(', ');
    this.admin = users.some((user) => user.admin);
  }
}
