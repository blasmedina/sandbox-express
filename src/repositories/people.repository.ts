import { IPeopleCreationAttributes } from '../interfaces/people.interface';
import { PeopleService } from '../services/people.service';

export default class PeopleRepository {
  static async create(payload: IPeopleCreationAttributes) {
    return PeopleService.create(payload);
  }

  static async readAll() {
    return PeopleService.readAll();
  }

  static async readById(id: string) {
    return PeopleService.readById(id);
  }

  static async update(id: string, payload: IPeopleCreationAttributes) {
    const data = await PeopleService.update(id, payload);
    return Boolean(data) ? data : null;
  }

  static async delete(id: string) {
    const data = await PeopleService.delete(id);
    return Boolean(data);
  }
}
