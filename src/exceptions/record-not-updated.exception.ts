import { HttpException } from './http.exception';
import { StatusCodes } from 'http-status-codes';

export class RecordNotUpdatedException extends HttpException {
  constructor(id: string) {
    super(StatusCodes.BAD_REQUEST, `Record with id:'${id}' not updated`);
  }
}
