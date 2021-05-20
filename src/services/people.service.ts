import axios from 'axios';
import { IPeopleAttributes, IPeopleCreationAttributes } from '../interfaces/people.interface';

const mockApiPeopleInstance = axios.create({
  baseURL: 'https://60a14031d2855b00173b1d8f.mockapi.io/api/v1/people',
  timeout: 1000,
});

export class PeopleService {
  static async create(payload: IPeopleCreationAttributes) {
    const response = await mockApiPeopleInstance.post('/', payload);
    const data = response.data;
    return data;
  }

  static async readAll() {
    const response = await mockApiPeopleInstance.get('/');
    const data: IPeopleAttributes[] = response.data;
    return data;
  }

  static async readById(id: string) {
    const response = await mockApiPeopleInstance.get(`/${id}`);
    const data: IPeopleAttributes = response.data;
    return data;
  }

  static async update(id: string, payload: IPeopleCreationAttributes) {
    const response = await mockApiPeopleInstance.put(`/${id}`, payload);
    const data = response.data;
    return data;
  }

  static async delete(id: string) {
    const response = await mockApiPeopleInstance.delete(`/${id}`);
    const data = response.data;
    return data;
  }
}
