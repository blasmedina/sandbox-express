import Joi from 'joi';
import { BadRequestException } from '../exceptions/bad-request.exception';
import { IUserCreationAttributes, UserCreationSchema } from '../interfaces/user.interface';
import { NextFunction, Request, Response } from 'express';
import { RecordNotFoundException } from '../exceptions/record-not-found.exception';
import { RecordNotUpdatedException } from '../exceptions/record-not-updated.exception';
import { StatusCodes } from 'http-status-codes';
import { UsersService } from '../services/users.service';
import { getPagination, getPagingData } from '../helpers/pagination.helper';
import { requestValidator } from '../helpers/request-validator.helper';

export class UserController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { body: payload } = await requestValidator(
        {
          body: UserCreationSchema,
        },
        req,
      );
      const row = await UsersService.create(payload);
      return res.status(StatusCodes.CREATED).json({ data: row });
    } catch (error) {
      next(error);
    }
  }

  static async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const rows = await UsersService.readAll();
      return res.json({ data: rows });
    } catch (error) {
      next(error);
    }
  }

  static async readAllWithPagination(req: Request, res: Response, next: NextFunction) {
    try {
      const querySchema = Joi.object({
        page: Joi.string(),
        size: Joi.string(),
        filter: Joi.string(),
      });

      const {
        query: { page = '0', size = '10', filter: filterString = '{}' },
      } = await requestValidator(
        {
          query: querySchema,
        },
        req,
      );

      const { limit, offset } = getPagination(page, size);
      const filter: IUserCreationAttributes = JSON.parse(filterString);
      const { rows, count } = await UsersService.readAllWithPaginationAndFilter(limit, offset, filter);
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

      const row = await UsersService.readById(id);
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

      const row = await UsersService.readById(id);
      if (row === null) throw new RecordNotFoundException(id);
      const data = await UsersService.update(id, payload);
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

      const row = await UsersService.readById(id);
      if (row === null) throw new BadRequestException();
      await UsersService.delete(id);
      return res.status(StatusCodes.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }
}
