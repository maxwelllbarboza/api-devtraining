import { UserEntity } from '../entities/user.entity';

export class ResponseUserDto {
  id: number;
  name: string;
  email: string;
  admin: boolean;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.admin = user.admin;
  }

  static fromUsers(users: UserEntity[]): ResponseUserDto[] {
    return users.map((user) => new ResponseUserDto(user));
  }
}
