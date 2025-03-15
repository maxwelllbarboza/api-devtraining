export class CreateUserDto {
  @Is
  name: string;
  email: string;
  admin: boolean;
}
