import { OrderEntity } from '../entities/orders.entity';

export class ResponseCreateUserDto {
  id: string;

  constructor(order: User) {
    this.id = order.id;
  }
}
