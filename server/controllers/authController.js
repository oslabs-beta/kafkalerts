import bcrypt from 'bcrypt';
import models from '../models/index.js';

const authController = {
  createAccount: async (req, res, next) => {
    const password = await bcrypt.hash(req.body.password, 10).catch(next);
    await models.User.create({
      username: req.body.username,
      password: password,
    }).catch((error) => {
      next({
        log: 'Error occurred during create account.',
        status: 400,
        message: { err: 'Error occurred during create account.', error },
      });
    });
    return next();
  },
  verifyUser: async (req, res, next) => {
    return next();
  },
  addBrokers: async (req, res, next) => {
    return next();
  },
  addConnectionString: async (req, res, next) => {
    return next();
  },
};

// authController.createAccount = async (req, res, next) => {
//   if (req.body.username && req.body.password) {
//     try {
//       const password = await bcrypt.hash(req.body.password, 10);
//       const { username } = req.body;
//       await User.create({
//         username,
//         password,
//       });
//       return next();
//     } catch (err) {
//       console.log('ERROR: ', err);
//       return next({
//         log: 'Error occurred during create account.',
//         status: 400,
//         message: { err: 'Error occurred during create account.', err },
//       });
//     }
//   }
//   return next({
//     log: 'No username/password provided.',
//     status: 400,
//     message: { err: 'No username/password provided.' },
//   });
// };

// authController.verifyUser = async (req, res, next) => {
//   if (req.body.username && req.body.password) {
//     try {
//       const { username, password } = req.body;
//       const user = await User.findOne({ where: { username } });
//       const badInput = {
//         log: 'Incorrect username/password combination.',
//         status: 400,
//         message: { err: 'Incorrect username/password combination.' },
//       };
//       if (!user) return next(badInput);
//       const matched = await bcrypt.compare(password, user.password);
//       if (!matched) return next(badInput);
//       return next();
//     } catch (err) {
//       return next({
//         log: 'Error verifying user',
//         status: 400,
//         message: { err: 'Error verifying user', err },
//       });
//     }
//   }
// };

// authController.addBrokers = async (req, res, next) => {
//   // console.log('inside addBrokers');
//   // try {
//   //   const { idsArray, username } = req.body;
//   //   console.log('req.body in addBrokers... ', req.body);
//   //   const queryString = `
//   //     UPDATE users
//   //     SET broker_ids = $1
//   //     WHERE username = $2
//   //   `;
//   //   let inserted = await db.query(queryString, [idsArray, username]);
//   //   console.log('inserted.. ', inserted);
//   //   return next();
//   // } catch (err) {
//   //   return next({
//   //     log: 'Error inside add Brokers.',
//   //     status: 401,
//   //     message: { err: 'Unable to add brokers to database table users.', err },
//   //   });
//   // }
//   return next();
// };
export default authController;
// module.exports = authController;
