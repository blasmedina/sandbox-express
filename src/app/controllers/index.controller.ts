import { Request, Response } from 'express';

export class IndexController {
  static getIndex(req: Request, res: Response) {
    return res.json({
      msg: 'Hello World!!',
    });
  }
}
