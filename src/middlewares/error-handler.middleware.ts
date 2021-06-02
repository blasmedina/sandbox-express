import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const STATUS_CODE_BY_NAME_ERROR: { [key: string]: StatusCodes } = {
  ValidationError: StatusCodes.BAD_REQUEST,
};

const STATUS_CODE_DEFAULT: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR;

export default function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  const { name, message, ...extra }: { name: string; message: string } = err;
  const status = err.status || STATUS_CODE_BY_NAME_ERROR[name] || STATUS_CODE_DEFAULT;
  const stack = err.stack?.split('\n');

  res.status(status).json({ error: { name, message, stack, extra } });
}
