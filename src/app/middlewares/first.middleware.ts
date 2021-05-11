import { NextFunction, Request, Response } from 'express';
import httpContext from 'express-http-context';

export default function firstMiddleware(req: Request, res: Response, next: NextFunction) {
  httpContext.set('startedAt', new Date());
  next();
}
