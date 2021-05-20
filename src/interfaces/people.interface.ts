import { Optional } from 'sequelize';
import Joi from 'joi';

export const PeopleCreationScheme = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
});

export interface IPeopleAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export type IPeopleCreationAttributes = Optional<IPeopleAttributes, 'id'>;
