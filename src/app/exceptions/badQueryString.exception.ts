import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class BadQueryStringException extends HttpException {
  constructor(input: string) {
    super(StatusCodes.BAD_REQUEST, `Query string '${input}' is not correct`);
  }
}
