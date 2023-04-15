const db = require('../postgres'); // db module
const pgp = db.$config.pgp; // the library's root after initialization
const bcrypt = require('bcrypt');

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
});

const authController = {};

authController.createAccount = async (req, res, next) => {
  try {
    const checkQuery = 'SELECT username FROM users WHERE username = $1';
    const exists = await db.query(checkQuery, [username]);
    if (!exists.rows.length) return next(err);

    //get account info from request body and try and send it into postgres db
    //TO DO: pass passwords through bcrypt before storing

    const { username, password } = req.body;
    const passHash = await bcrypt.hash(password, 10);
    const newUser = 'INSERT INTO users(username, password) VALUES $1, $2';

    const created = await db.query(newUser, [username, passHash]);
    if (created === Error) return next(created);
    res.locals.cookieID = username;
    return next();
  } catch (err) {
    return next(err);
  }
};

authController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await db.query(
      'SELECT password FROM users WHERE username = $1',
      [username]
    );
    const matched = await bcrypt.compare(password, hashedPassword);
    if (!matched) return next(err);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;
