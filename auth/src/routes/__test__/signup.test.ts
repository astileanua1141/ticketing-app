import request from 'supertest';
import { app } from '../../app';
import { signUpGetCookie } from '../../test/helper';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'invalid-test/email.com',
      password: 'password',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'valid-test@email.com',
      password: 'p',
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com' })
    .expect(400);

  return request(app)
    .post('/api/users/signup')
    .send({ password: 'asurhfurg' })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'duplicate@email.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'duplicate@email.com',
      password: 'password',
    })
    .expect(400);
});

it('sets a cookie after a successful signup', async () => {
  const cookie = await signUpGetCookie();

  // to make ths work, we introduced an environment check
  // for the secure flag, in app.ts
  expect(cookie).toBeDefined();
});
