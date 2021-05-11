import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class RecordNotFoundException extends HttpException {
  constructor(id: string) {
    super(StatusCodes.NOT_FOUND, `Record with id:'${id}' not found`);
    this.name = 'RecordNotFoundError';
  }
}
