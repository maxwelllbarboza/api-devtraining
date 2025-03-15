import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.repository.create(createUserDto);
  }

  findAll(): Promise<UserEntity> {
    return this.repository.create(createUserDto);

  }

  findOne(id: number): Promise<UserEntity> {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return `This action updates a #${id} user`;
  }

  remove(id: number): Promise<UserEntity> {
    return `This action removes a #${id} user`;
  }
}
