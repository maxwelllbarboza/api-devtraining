import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";


@Catch()
export class httpExceptionFilter<T> implements ExceptionFilter{
  catch(exception: any, host: ArgumentsHost) {
      
  }
}
