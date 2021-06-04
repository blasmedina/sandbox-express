import { IPeopleCreationAttributes } from '../interfaces/people.interface';
import { PeopleRepository } from '../repositories/people.repository';

export class PeopleService {
  static async create(payload: IPeopleCreationAttributes) {
    const data = PeopleRepository.create(payload);
    return data;
  }

  static async readAll() {
    const data = PeopleRepository.readAll();
    return data;
  }

  static async readById(id: string) {
    const data = PeopleRepository.readById(id);
    return data;
  }

  static async update(id: string, payload: IPeopleCreationAttributes) {
    const data = PeopleRepository.update(id, payload);
    return data;
  }

  static async delete(id: string) {
    const data = PeopleRepository.delete(id);
    return data;
  }
}
