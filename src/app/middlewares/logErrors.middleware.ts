import { NextFunction, Request, Response } from 'express';

export default function logErrors(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  next(err);
}
