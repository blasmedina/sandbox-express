import { NextFunction, Request, Response } from 'express';
import { RecordNotFoundException } from '../exceptions/record-not-found.exception';
import { RecordNotUpdatedException } from '../exceptions/record-not-updated.exception';
import { IPeopleCreationAttributes, PeopleCreationScheme } from '../interfaces/people.interface';
import { PeopleService } from '../services/people.service';

export class PeopleController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: IPeopleCreationAttributes = await PeopleCreationScheme.validateAsync(req.body);
      const row = await PeopleService.create(payload);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const rows = await PeopleService.readAll();
      return res.json({ data: rows });
    } catch (error) {
      next(error);
    }
  }

  static async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const row = await PeopleService.readById(id);
      if (row === null) throw new RecordNotFoundException(id);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: IPeopleCreationAttributes = await PeopleCreationScheme.validateAsync(req.body);
      const { id } = req.params;
      const row = await PeopleService.update(id, payload);
      if (row === null) throw new RecordNotUpdatedException(id);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const row = await PeopleService.delete(id);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }
}
