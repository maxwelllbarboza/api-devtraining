import { Injectable } from "@nestjs/common";

@Injectable
export class UsersRepository{
  constructor(private readonly prisma: Prisma)
}
