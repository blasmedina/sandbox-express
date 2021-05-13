import { Request, Response } from 'express';
import httpContext from 'express-http-context';

export class IndexController {
  static getIndex(req: Request, res: Response) {
    const startedAt = httpContext.get('startedAt');

    return res.json({
      startedAt,
    });
  }
}
