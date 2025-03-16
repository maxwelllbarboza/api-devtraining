import { Catch, ExceptionFilter } from "@nestjs/common";


@Catch()
export class httpExceptionFilter<T> implements ExceptionFilter{
  
}
