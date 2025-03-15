import { UserEntity } from '../entities/user.entity';

export class ResponseCreateUserDto {
  id: number;
  name: string;
  email

  constructor(users: UserEntity) {
    this.id = users.id
  }
}
