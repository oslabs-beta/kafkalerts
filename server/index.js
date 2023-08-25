import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import authController from './controllers/authController.js';
import cookieController from './controllers/cookieController.js';
const app = express();

import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import models, { sequelize } from './models/index.js';

const corsOptions = {
  origin: process.env.CLIENT_URL_DEV,
  credentials: true,
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//always send index.html at all routes so react router handles them instead of backend
// app.get('/*', (req, res) => {
//   console.log('here in the server');
//   return res.sendFile(path.join(__dirname, '../index.html'), (err) => {
//     if (err) return res.status(500).send(err);
//   });
// });
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
//   );
// }
// app.use(express.static(path.join(__dirname, '../index.html')));

// LOG IN ROUTE
app.post(
  '/api/login',
  (req, res, next) => {
    console.log('in the login route');
    return next();
  },
  authController.verifyUser,
  cookieController.setCookie,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// SIGN UP ROUTE
app.post(
  '/api/signup',
  authController.createAccount,
  cookieController.setCookie,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// ADD BROKER IDS ROUTE
// app.post('/api/addbrokers', authController.addBrokers, (req, res) => {
//   return res.status(200).json('ids added');
// });

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

sequelize.sync({ force: true }).then(async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
  });
});
