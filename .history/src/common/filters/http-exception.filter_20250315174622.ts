import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(Http)
export class httpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
