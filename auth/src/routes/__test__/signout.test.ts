import request from 'supertest';
import { app } from '../../app';

it('clears the cookie after signing out', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signout')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);
  // Logging the value:
  // console.log(response.get('Set-Cookie'));

  // Generic check:
  // expect(response.get('Set-Cookie')).toBeDefined();

  // Concrete (value) check - this will not change
  const expiredCookieStr =
    'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly';

  expect(response.get('Set-Cookie')[0]).toEqual(expiredCookieStr);
});
