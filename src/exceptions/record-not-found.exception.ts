import { HttpException } from './http.exception';
import { StatusCodes } from 'http-status-codes';

export class RecordNotFoundException extends HttpException {
  constructor(id: string) {
    super(StatusCodes.NOT_FOUND, `Record with id:'${id}' not found`);
  }
}
