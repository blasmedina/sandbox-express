import UsersRepository from '../repositories/users.repository';
import { BadRequestException } from '../exceptions/bad-request.exception';
import { IUserCreationAttributes, UserCreationSchema } from '../interfaces/user.interface';
import { NextFunction, Request, Response } from 'express';
import { RecordNotFoundException } from '../exceptions/record-not-found.exception';
import { RecordNotUpdatedException } from '../exceptions/record-not-updated.exception';
import { StatusCodes } from 'http-status-codes';
import { getPagination, getPagingData } from '../helpers/pagination.helper';
import { Joi, requestValidator } from '../helpers/request-validator.helper';

export class UserController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body: payload } = await requestValidator(
        {
          body: UserCreationSchema,
        },
        req,
      );
      const row = await UsersRepository.create(payload);
      return res.status(StatusCodes.CREATED).json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const rows = await UsersRepository.readAll();
      return res.json({ data: rows });
    } catch (error) {
      next(error);
    }
  }

  static async readAllWithPagination(req: Request, res: Response, next: NextFunction) {
    try {
      const querySchema = Joi.object({
        name: Joi.string(),
        page: Joi.string(),
        size: Joi.string(),
      });

      const {
        query: { name = '', page = '0', size = '10' },
      } = await requestValidator(
        {
          query: querySchema,
        },
        req,
      );

      const { limit, offset } = getPagination(page, size);
      const filter: IUserCreationAttributes = { name };
      const { rows, count } = await UsersRepository.readAllWithPaginationAndFilter(limit, offset, filter);
      const { totalItems, data, totalPages, currentPage } = getPagingData(rows, count, page, limit);
      return res.json({ totalItems, data, totalPages, currentPage });
    } catch (error) {
      next(error);
    }
  }

  static async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsSchema = Joi.object({
        id: Joi.string().guid().required(),
      });
      const {
        params: { id },
      } = await requestValidator(
        {
          params: paramsSchema,
        },
        req,
      );

      const row = await UsersRepository.readById(id);
      if (row === null) throw new RecordNotFoundException(id);
      return res.json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsSchema = Joi.object({
        id: Joi.string().guid().required(),
      });
      const {
        body: payload,
        params: { id },
      } = await requestValidator(
        {
          body: UserCreationSchema,
          params: paramsSchema,
        },
        req,
      );

      const row = await UsersRepository.readById(id);
      if (row === null) throw new RecordNotFoundException(id);
      const data = await UsersRepository.update(id, payload);
      if (data === null) throw new RecordNotUpdatedException(id);
      return res.json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsSchema = Joi.object({
        id: Joi.string().guid().required(),
      });
      const {
        params: { id },
      } = await requestValidator(
        {
          params: paramsSchema,
        },
        req,
      );

      const row = await UsersRepository.readById(id);
      if (row === null) throw new BadRequestException();
      await UsersRepository.delete(id);
      return res.status(StatusCodes.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }
}
