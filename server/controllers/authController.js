const db = require('../postgres'); // db module
const bcrypt = require('bcrypt');

const authController = {};

authController.createAccount = async (req, res, next) => {
  // console.log('inside create account');
  try {
    const { username, password } = req.body;
    const checkQuery = 'SELECT username FROM users WHERE username = $1';
    await db.query(checkQuery, [username], async (err, user) => {
      if (user.rowCount > 0) {
        res.locals.isVerified = false;
        return next();
      } else if (err) {
        return next({
          log: 'Error occurred during create account.',
          status: 400,
          message: { err: 'Error occurred during create account.', err },
        });
      } else {
        const passHash = await bcrypt.hash(password, 10);
        const newUser =
          'INSERT INTO users (username, password) VALUES ($1, $2)';
        await db.query(newUser, [username, passHash], (err, user) => {
          if (err) {
            return next({
              log: 'Error occurred when creating new account.',
              status: 401,
              message: {
                err: 'Error occurred when creating new account.',
                err,
              },
            });
          } else {
            res.locals.isVerified = true;
            res.locals.cookieID = username;
            return next();
          }
        });
      }
    });
  } catch (err) {
    return next({
      log: 'Error occurred during create account.',
      status: 400,
      message: { err: 'Error occurred during create account.', err },
    });
  }
};

authController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    let hashedPassword = await db.query(
      'SELECT password FROM users WHERE username = $1',
      [username]
    );
    hashedPassword = hashedPassword.rows[0].password;
    const matched = await bcrypt.compare(password, hashedPassword);
    if (!matched) {
      res.locals.isVerified = false;
      return next();
    } else {
      res.locals.isVerified = true;
      res.locals.cookieID = username;
      return next();
    }
  } catch (err) {
    // console.log('catch in verify user')
    return next({
      log: 'Error inside verify user.',
      status: 401,
      message: { err: 'Error inside verify user.', err },
    });
  }
};

authController.addBrokers = async (req, res, next) => {
  console.log('inside addBrokers');
  try {
    const { idsArray, username } = req.body;
    console.log('req.body in addBrokers... ', req.body);
    const queryString = `
      UPDATE users
      SET broker_ids = $1
      WHERE username = $2
    `;
    let inserted = await db.query(queryString, [idsArray, username]);
    console.log('inserted.. ', inserted);
    return next();
  } catch (err) {
    // console.log('catch in verify user')
    return next({
      log: 'Error inside add Brokers.',
      status: 401,
      message: { err: 'Unable to add brokers to database table users.', err },
    });
  }
};

module.exports = authController;
