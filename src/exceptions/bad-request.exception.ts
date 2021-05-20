import { HttpException } from './http.exception';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export class BadRequestException extends HttpException {
  constructor() {
    super(StatusCodes.BAD_REQUEST, ReasonPhrases.BAD_REQUEST);
  }
}
