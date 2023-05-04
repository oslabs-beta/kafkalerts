const express = require('express');
const path = require('path');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const authController = require('./controllers/authController');
const cookieController = require('./controllers/cookieController');
const apiController = require('./controllers/apiController');
const app = express();
const PORT = 3000;

// Set up CORS options to allow passing through cookies to the client server
const corsOptions = {
  origin: 'http://localhost:8080',
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

app.use(express.static(path.join(__dirname, '../index.html')));

//GET METRICS ROUTE
//TO DO: actually build this
// app.get(
//   '/kafka',
//   apiController.getActiveBrokers,
//   apiController.getURP,
//   apiController.getBytesIn,
//   apiController.getBytesOut,
//   (req, res) => {
//     return res.status(200).json(res.locals.metrics);
//   }
// );

// LOG IN ROUTE
app.post(
  '/login',
  authController.verifyUser,
  cookieController.setCookie,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// SIGN UP ROUTE
app.post(
  '/signup',
  authController.createAccount,
  cookieController.setCookie,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// ADD BROKER IDS ROUTE
app.post(
  '/addbrokers',
  authController.addBrokers,
  (req, res) => {
    return res.status(200).json('ids added')
  }
)

// catch-all route handler for any requests to an unknown route
app.use(function (err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
});

// handler to send back 404 status code
app.use((req, res) => res.sendStatus(404));

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

/**
 * start server
 */
const listener = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = listener;
