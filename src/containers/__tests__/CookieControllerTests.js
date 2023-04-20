const request = require('supertest');
const server = 'http://localhost:3000';

describe('Cookie controller', () => {
  const username = 'test' + Math.floor(Math.random()*100);
  const body = {username, password: 'test'} 
  body.isVerified = true;

  it('Cookie should be created on signup', () => {
    request(server)
      .post('/signup')
      .send(body)
      .type('form')
      .expect('cookieId', username)
  });

  it('Cookie should be created on login', () => {
    request(server)
      .post('/login')
      .send(body)
      .type('form')
      .expect('cookieId', username)
  });
})

