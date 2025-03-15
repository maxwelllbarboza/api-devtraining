import { UserEntity } from '../entities/user.entity';

export class ResponseCreateUserDto {
  id: number;
  name:

  constructor(order: UserEntity) {
    this.id = order.id;
  }
}
