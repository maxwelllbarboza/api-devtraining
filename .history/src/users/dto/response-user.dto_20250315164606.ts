import { UserEntity } from '../entities/user.entity';

export class ResponseUserDto {
  id: number;
  name: string;
  email: string;
  admin: boolean;

  constructor(users: UserEntity | UserEntity[]) {
    if (Array.isArray(users)) {
      // Se for um array de usuários, criamos um array de ResponseUserDto
      return users.map((user) => new ResponseUserDto(user));
    }

    // Caso contrário, é um único usuário
    this.id = users.id;
    this.name = users.name;
    this.email = users.email;
    this.admin = users.admin;
  }
}
