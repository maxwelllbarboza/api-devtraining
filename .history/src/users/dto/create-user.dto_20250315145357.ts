export class CreateUserDto {
  @IsE
  name: string;
  email: string;
  admin: boolean;
}
