import { NextFunction, Request, Response } from 'express';
import { BadQueryStringException } from '../exceptions/badQueryString.exception';
import { RecordNotFoundException } from '../exceptions/recordNotFound.exception';
import { RecordNotUpdatedException } from '../exceptions/recordNotUpdated.exception';
import { getPagination, getPagingData } from '../helpers/pagination.helper';
import { UserCreationAttributes, userCreationScheme } from '../models/user.model';
import UsersRepository from '../repositories/users.repository';

export class UserController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: UserCreationAttributes = await userCreationScheme.validateAsync(req.body);
      const data = await UsersRepository.create(payload);
      return res.json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UsersRepository.readAll();
      return res.json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async readAllWithPagination(req: Request, res: Response, next: NextFunction) {
    try {
      const { name = '', page = '0', size = '10' } = req.query;
      if (typeof name !== 'string') throw new BadQueryStringException('name');
      if (typeof page !== 'string') throw new BadQueryStringException('page');
      if (typeof size !== 'string') throw new BadQueryStringException('size');

      const { limit, offset } = getPagination(page, size);
      const filter: UserCreationAttributes = { name };
      const data = await UsersRepository.readAllWithPaginationAndFilter(limit, offset, filter);
      const response = getPagingData(data, page, limit);
      return res.json(response);
    } catch (error) {
      next(error);
    }
  }

  static async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await UsersRepository.readById(id);
      if (data === null) {
        throw new RecordNotFoundException(id);
      }
      return res.json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const payload: UserCreationAttributes = await userCreationScheme.validateAsync(req.body);
      const { id } = req.params;
      const data = await UsersRepository.update(id, payload);
      if (data === null) {
        throw new RecordNotUpdatedException(id);
      }
      return res.json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await UsersRepository.delete(id);
      return res.json({ data });
    } catch (error) {
      next(error);
    }
  }
}
