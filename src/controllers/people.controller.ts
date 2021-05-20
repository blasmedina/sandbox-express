import Joi from 'joi';
import PeopleRepository from '../repositories/people.repository';
import { NextFunction, Request, Response } from 'express';
import { PeopleCreationScheme } from '../interfaces/people.interface';
import { RecordNotFoundException } from '../exceptions/record-not-found.exception';
import { RecordNotUpdatedException } from '../exceptions/record-not-updated.exception';
import { requestValidator } from '../helpers/request-validator.helper';

export class PeopleController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body: payload } = await requestValidator(
        {
          body: PeopleCreationScheme,
        },
        req,
      );
      const row = await PeopleRepository.create(payload);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const rows = await PeopleRepository.readAll();
      return res.json({ data: rows });
    } catch (error) {
      next(error);
    }
  }

  static async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsSchema = Joi.object({
        id: Joi.string().required(),
      });
      const {
        params: { id },
      } = await requestValidator(
        {
          params: paramsSchema,
        },
        req,
      );
      const row = await PeopleRepository.readById(id);
      if (row === null) throw new RecordNotFoundException(id);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsSchema = Joi.object({
        id: Joi.string().required(),
      });
      const {
        body: payload,
        params: { id },
      } = await requestValidator(
        {
          body: PeopleCreationScheme,
          params: paramsSchema,
        },
        req,
      );

      const row = await PeopleRepository.update(id, payload);
      if (row === null) throw new RecordNotUpdatedException(id);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsSchema = Joi.object({
        id: Joi.string().required(),
      });
      const {
        params: { id },
      } = await requestValidator(
        {
          params: paramsSchema,
        },
        req,
      );
      const row = await PeopleRepository.delete(id);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }
}
