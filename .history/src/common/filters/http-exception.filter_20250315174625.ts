import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(HttpEx)
export class httpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
