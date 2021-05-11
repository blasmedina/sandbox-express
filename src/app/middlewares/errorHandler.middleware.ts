import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const { name, message, status = StatusCodes.INTERNAL_SERVER_ERROR, ...content } = err;
  const stack = err.stack?.split('\n');
  res.status(status).json({ error: { name, message, stack, content } });
}
