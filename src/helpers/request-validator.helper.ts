import { Request } from 'express';
import Joi from 'joi';

interface IRequestSchemas {
  body?: Joi.ObjectSchema;
  params?: Joi.ObjectSchema;
  query?: Joi.ObjectSchema;
}

interface IResult {
  body: any;
  params: {
    [key: string]: string;
  };
  query: {
    [key: string]: string;
  };
}

export async function requestValidator(requestSchemas: IRequestSchemas, req: Request) {
  const result: IResult = {
    body: undefined,
    params: {},
    query: {},
  };

  if (requestSchemas.params) {
    result.params = await requestSchemas.params.validateAsync(req.params);
  }

  if (requestSchemas.body) {
    result.body = await requestSchemas.body.validateAsync(req.body);
  }

  if (requestSchemas.query) {
    result.query = await requestSchemas.query.validateAsync(req.query);
  }

  return result;
}
