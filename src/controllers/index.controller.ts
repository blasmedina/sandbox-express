import httpContext from 'express-http-context';
import { Request, Response } from 'express';

export class IndexController {
  static getIndex(req: Request, res: Response) {
    const startedAt = httpContext.get('startedAt');

    return res.json({
      startedAt,
    });
  }
}
