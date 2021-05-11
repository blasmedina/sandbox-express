import { StatusCodes } from 'http-status-codes';
import { HttpException } from './http.exception';

export class RecordNotUpdatedException extends HttpException {
  constructor(id: string) {
    super(StatusCodes.BAD_REQUEST, `Record with id:'${id}' not updated`);
  }
}
