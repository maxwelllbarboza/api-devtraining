import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @IsOptional()
  id?: number; // Definir id como opcional (no caso de criar novos usuários, o id pode ser omitido).

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
    // A lógica dentro do construtor vai tratar sempre um array de usuários
    // Ao invés de concatenar os dados, a lógica pode ser adaptada para ser uma lista de objetos DTO

    // Aplique a transformação diretamente no array de usuários.
    this.name = users.map(user => user.name).join(', '); // Exemplo de agregação dos nomes
    this.email = users.map(user => user.email).join(', '); // Exemplo de agregação dos e-mails
    this.admin = users.some(user => user.admin); // Verifica se pelo menos um dos usuários é administrador.
  }
}
