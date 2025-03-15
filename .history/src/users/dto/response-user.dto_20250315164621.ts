import { UserEntity } from '../entities/user.entity';

export class ResponseUserDto {
  id: number;
  name: string;
  email: string;
  admin: boolean;

  constructor(users: UserEntity | UserEntity[]) {
    if (Array.isArray(users)) {
      return users.map((user) => new ResponseUserDto(user));
    }

    this.id = users.id;
    this.name = users.name;
    this.email = users.email;
    this.admin = users.admin;
  }
}
