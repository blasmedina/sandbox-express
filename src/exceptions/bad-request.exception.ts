import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
  constructor() {
    super(StatusCodes.BAD_REQUEST, ReasonPhrases.BAD_REQUEST);
  }
}
