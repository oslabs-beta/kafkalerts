const request = require('supertest');
const server = 'http://localhost:3000';
const bcrypt = require('bcrypt');

// test createAccount 
// describe('Account created successfully', () => {
//   it('Account is created', () => {

//   })

//   it('Account is not duplicated', () => {

//   })
// })

describe('Bcrypting passwords', () => {

  it('Passwords should not be stored in plaintext', () => {
    request(server)
      .post('/signup')
      .send({"username": "test3", "password" : "password3"})
      .type('form')
      .end((err, res) => {
        authController.createAccount({username: 'test3'}, (err, user) => {
          expect(user.password).to.not.eql('password3');
        });
      });
  });

  it('Passwords be bcrypted', () => {
    request(server)
      .post('/signup')
      .send({ username: 'test4', password: 'password4' })
      .type('form')
      .end((err, res) => {
        authController.createAccount({username: 'test4'}, (err, user) => {
          expect(bcrypt.compareSync('password4', user.password)).to.be.true;
        });
      });
  });

  it('Bcrypts passwords in SQL middleware, not in authController', () => {
    request(server)
      .post('/signup')
      .send({ username: 'petri', password: 'aight'  })
      .type('form')
      .end((err, res) => {
        authController.createAccount({ username: 'petri', password: 'aight' }, (err, user) => {
          expect(user.password).to.not.eql('aight');
          expect(bcrypt.compareSync('aight', user.password)).to.be.true;
      });
    });
  });
})

// test verify account
// describe('Verifying user')