const request = require('supertest');
const server = 'http://localhost:3000';

describe('Bcrypting passwords', () => {

  it('Cookie should be created', () => {
    request(server)
      .post('/signup')
      .send({"username": "test3", "password" : "password3"})
      .type('form')
      // .end((err, res) => {
      //   cookieController.setCookie({}, (err, user) => {
      //     expect(user.cookieID).to.eql("test3");
      //   });
      // });
  });
  
})

