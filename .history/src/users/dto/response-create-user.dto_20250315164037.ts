import { OrderEntity } from '../entities/orders.entity';

export class ResponseCreateUserDto {
  id: string;

  constructor(order: OrderEntity) {
    this.id = order.id;
  }
}
