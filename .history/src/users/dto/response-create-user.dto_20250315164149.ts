import { UserEntity } from '../entities/user.entity';

export class ResponseCreateUserDto {
  id: number;
  name: string;
  email: string

  constructor(users: UserEntity) {
    this.id = users.id
  }
}
