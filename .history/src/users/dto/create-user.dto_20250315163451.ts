import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
    // Como estamos recebendo um array de UserEntity, podemos tratar os dados de todos os usuários aqui.

    // Pegamos o id de todos os usuários e agregamos ou usamos como necessário.
    // Aqui vou simplesmente pegar o id do primeiro usuário para ilustrar, mas você pode mudar conforme necessário.
    this.id = users[0]?.id;

    // O nome e o e-mail serão agregados de forma concatenada (ou alterados conforme a necessidade).
    this.name = users.map(user => user.name).join(', ');
    this.email = users.map(user => user.email).join(', ');

    // Verificamos se algum dos usuários é admin.
    this.admin = users.some(user => user.admin);
  }
}
