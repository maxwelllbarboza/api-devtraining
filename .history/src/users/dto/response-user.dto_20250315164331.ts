import { UserEntity } from '../entities/user.entity';

export class ResponseUserDto {
  id: number;
  name: string;
  email: string;
  admin: boolean;

  constructor(users: UserEntity) {
    this.id = users.id;
    this.name = users.name;
    this.email = this.email;
    this.admin = users.admin;
  }
}
