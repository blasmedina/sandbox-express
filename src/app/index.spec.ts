import app from './index';

import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

describe('Comunicación REST', () => {
  test('Prueba básica de comunicación', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(StatusCodes.OK);
    // expect(res.text).toEqual('respond with a resource');
  });
});
