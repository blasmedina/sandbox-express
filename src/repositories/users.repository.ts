import User from '../models/user.model';
import { IUserCreationAttributes } from '../interfaces/user.interface';
import { Op } from '../models';

export default class UsersRepository {
  static async create(payload: IUserCreationAttributes) {
    return User.create(payload);
  }

  static async readAll() {
    return User.findAll();
  }

  static async readAllWithPaginationAndFilter(limit: number, offset: number, filter: IUserCreationAttributes) {
    const { name = '' } = filter;
    const where = {
      name: {
        [Op.like]: `%${name}%`,
      },
    };
    return User.findAndCountAll({
      limit,
      offset,
      where,
    });
  }

  static async readById(id: string) {
    return User.findByPk(id);
  }

  static async update(id: string, payload: IUserCreationAttributes) {
    const data = await User.update(payload, { where: { id } });
    return Boolean(data[0]) ? this.readById(id) : null;
  }

  static async delete(id: string) {
    const data = await User.destroy({ where: { id } });
    return Boolean(data);
  }
}
