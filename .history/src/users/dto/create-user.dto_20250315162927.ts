import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @IsI
  id
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

  constructor(users: UserEntity | UserEntity[]) {
    if (Array.isArray(users)) {
      this.name = users.map((user) => user.name).join(', ');
      this.email = users.map((user) => user.email).join(', ');
      this.admin = users.some((user) => user.admin); //
    } else {
      this.name = users.name;
      this.email = users.email;
      this.admin = users.admin;
    }
  }
}
