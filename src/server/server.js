const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/authController');
const cookieController = require('./controllers/cookieController');
const app = express();
const PORT = 3000;

// === SERVER ===

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//always send index.html at all routes so react router handles them instead of backend
app.get('/*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'), (err) => {
    if (err) return res.status(500).send(err);
  });
});

// serve static files
app.post(
  '/login',
  authController.verifyUser,
  cookieController.setCookie,
  (req, res) => {
    return res.status(200).json('logged in');
  }
);

app.post(
  '/signup',
  authController.createAccount,
  cookieController.setCookie,
  (req, res) => {
    return res.status(200).json('account created');
  }
);

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
  const errObj = Object.assign(defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
