import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.';
import { IUserAttributes, IUserCreationAttributes } from '../interfaces/user.interface';

class User extends Model<IUserAttributes, IUserCreationAttributes> implements IUserAttributes {
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
