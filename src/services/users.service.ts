import { IUserCreationAttributes } from '../interfaces/user.interface';
import { UsersRepository } from '../repositories/users.repository';

export class UsersService {
  static async create(payload: IUserCreationAttributes) {
    const data = UsersRepository.create(payload);
    return data;
  }

  static async readAll() {
    const data = UsersRepository.readAll();
    return data;
  }

  static async readAllWithPaginationAndFilter(limit: number, offset: number, filter: IUserCreationAttributes) {
    const data = UsersRepository.readAllWithPaginationAndFilter(limit, offset, filter);
    return data;
  }

  static async readById(id: string) {
    const data = UsersRepository.readById(id);
    return data;
  }

  static async update(id: string, payload: IUserCreationAttributes) {
    const data = UsersRepository.update(id, payload);
    return data;
  }

  static async delete(id: string) {
    const data = UsersRepository.delete(id);
    return data;
  }
}
