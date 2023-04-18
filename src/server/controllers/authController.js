const db = require('../postgres'); // db module
// const pgp = db.$config.pgp; // the library's root after initialization
const bcrypt = require('bcrypt');


const authController = {};

authController.createAccount = async (req, res, next) => {
  console.log('inside create account');
  try {
    const { username, password } = req.body;
    const checkQuery = 'SELECT username FROM users WHERE username = $1';
    await db.query(checkQuery, [username], async (err, user) => {
      if (user.rowCount > 0) {
        res.locals.isVerified = true;
        console.log('User already exists. Please log in.');
        return next();
      } else if (err) {
        return next({
          log: 'Error occurred during create account.',
          status: 400,
          message: { err: 'Error occurred during create account.', err },
        });
      } else {
        const passHash = await bcrypt.hash(password, 10);
        const newUser = 'INSERT INTO users (username, password) VALUES ($1, $2)';
        await db.query(newUser, [username, passHash], (err, user) => {
          if (err) {
            return next({
              log: 'Error occurred when creating new account.',
              status: 401,
              message: { err: 'Error occurred when creating new account.', err },
            });
          } else {
            res.locals.isVerified = true;
            res.locals.cookieID = username;
            return next();
          }
        });
      }
    });

    //get account info from request body and try and send it into postgres db
    //TO DO: pass passwords through bcrypt before storing
      
  } catch (err) {
    return next('catch line 36',err);
  }
};

authController.verifyUser = async (req, res, next) => {
  console.log('inside verify user')
  try {
    const { username, password } = req.body;
    console.log(username, password);
    let hashedPassword = await db.query(
      'SELECT password FROM users WHERE username = $1',
      [username]
    );
    hashedPassword = hashedPassword.rows[0].password;
    const matched = await bcrypt.compare(password, hashedPassword);
    if (!matched) {
      res.locals.isVerified = false;
      res.redirect('/')
      console.log('not a match')
      // return next();
    } else {
      res.locals.isVerified = true;
      res.locals.cookieID = username;
      return next();
    }
  } catch (err) {
    console.log('catch in verify user')
    return next({
      log: 'Error inside verify user.',
      status: 401,
      message: { err: 'Error inside verify user.', err },
    });
  }
};

module.exports = authController;
