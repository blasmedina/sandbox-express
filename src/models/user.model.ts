import { Optional, Model, DataTypes } from 'sequelize';
import { sequelize } from '.';
import Joi from 'joi';

export const userCreationScheme = Joi.object({
  name: Joi.string().required(),
});

export interface UserAttributes {
  id: string;
  name: string;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'User',
    underscored: true,
  },
);

export default User;
