const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  const username = 'test' + Math.floor(Math.random()*100);
  const body = {username, password: 'test'} 

  // test that index.html gets sent so that react router handles routes
  // rather than routes being handled in backend
  // maybe not complete?
  describe('/*', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        request(server)
          .get('/*')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  // login route
  describe('/login', () => {
    describe('POST', () => {
      it('login route responds with 200 status and application/json content type', async () => {
        request(server)
          .post('/login')
          .send(JSON.stringify(body))
          .set('Content-Type', /application\/json/)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
      body.isVerified = true;
      body.cookieId = username;
      it('res.locals.isVerified and res.locals.cookieID is in the body of the response', async () => {
        request(server)
          .post('/login')
          .send(JSON.stringify(body))
          .expect('isVerified', true)
          .expect('cookieID', username)
          .expect(200);
      });
    });
  });

  // signup route
  describe('/signup', () => {
    describe('POST', () => {
      it('signup route responds with 200 status and application/json content type', () => {
        request(server)
          .post('/signup')
          .send(JSON.stringify(body))
          .set('Content-Type', /application\/json/)
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
      body.isVerified = true;
      body.cookieId = username;
      it('res.locals.isVerified and res.locals.cookieID is in the body of the response', async () => {
        request(server)
          .post('/signup')
          .send(JSON.stringify(body))
          .expect('isVerified', true)
          .expect('cookieID', username)
          .expect(200);
      });
    });
  });
  
})
