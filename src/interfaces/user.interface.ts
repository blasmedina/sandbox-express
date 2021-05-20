import { Optional } from 'sequelize';
import Joi from 'joi';

export const UserCreationSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

export interface IUserAttributes {
  id: string;
  name: string;
}

export type IUserCreationAttributes = Optional<IUserAttributes, 'id'>;
