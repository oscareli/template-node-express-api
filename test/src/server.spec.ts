import request from 'supertest';
import app from '../../src/server';

describe('Route ', () => {
  it('should be call route /', async () => {
    const res = await request(app).get('/');
    expect(res.body).toEqual({ msg: 'Hello World!' });
  });
});
