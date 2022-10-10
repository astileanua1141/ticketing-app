import request from 'supertest';
import { app } from '../../app';

it('fails when an email that does not exist  is supplied', async () => {
  return request(app)
    .post('/api/users/signin')
    .send({
      email: 'test123@email.com',
      password: 'password',
    })
    .expect(400);
});

it('fails when an incorrect password  is supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'correct@test.com',
      password: 'correct-passwd',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'correct@test.com',
      password: 'incorrect-passwd',
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'any@test.com',
      password: 'correct-passwd',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'any@test.com',
      password: 'correct-passwd',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
