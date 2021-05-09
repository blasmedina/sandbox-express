import UsersRepository from '../repositories/users.repository';

export class UserController {
  static async create(req, res) {
    try {
      const {
        body: { name },
      } = req;
      const payload = { name };
      const data = await UsersRepository.create(payload);
      return res.json({ data });
    } catch (error) {}
  }

  static async readAll(_req, res) {
    try {
      const data = await UsersRepository.readAll();
      return res.json({ data });
    } catch (error) {}
  }

  static async readById(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const data = await UsersRepository.readById(id);
      return res.json({ data });
    } catch (error) {}
  }

  static async update(req, res) {
    try {
      const {
        body: { name },
        params: { id },
      } = req;
      const payload = { name };
      const data = await UsersRepository.update(id, payload);
      return res.json({ data });
    } catch (error) {}
  }

  static async delete(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const data = await UsersRepository.delete(id);
      return res.json({ data });
    } catch (error) {}
  }
}
