import { UserEntity } from '../entities/user.entity';

export class ResponseCreateUserDto {
  id: string;
  name

  constructor(order: UserEntity) {
    this.id = order.id;
  }
}
