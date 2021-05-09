import { db } from '../models';

export default class UsersRepository {
  static async create(payload) {
    return db.User.create(payload);
  }

  static async readAll() {
    return db.User.findAll();
  }

  static async readById(id) {
    return db.User.findByPk(id);
  }

  static async update(id, payload) {
    const data = await db.User.update(payload, { where: { id } });
    return Boolean(data[0]) ? this.readById(id) : null;
  }

  static async delete(id) {
    const data = await db.User.destroy({ where: { id } });
    return Boolean(data);
  }
}
