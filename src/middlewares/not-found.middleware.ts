import { NextFunction, Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export default function notFoundMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, url } = req;
  res.status(StatusCodes.NOT_FOUND).send({
    error: {
      name: ReasonPhrases.NOT_FOUND,
      message: `Cannot GET ${url}`,
      extra: {
        method,
        url,
      },
    },
  });
}
