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

  async findAll(): Promise<UserEntity[]> {
    return await this.repository.findAll();
  }

  findOne(id: number): Promise<UserEntity> {
    return await this.repository.findOne();
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return `This action updates a #${id} user`;
  }

  remove(id: number): Promise<UserEntity> {
    return `This action removes a #${id} user`;
  }
}
