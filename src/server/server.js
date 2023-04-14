const express = require('express');
const path = require('path');
const authController = requre('./controllers/authController')

// const router = express.Router();

const app = express();
const PORT = 3000;



// controllers - 
// postgres db - 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files
// app.use('/login')

// app.use('/dashboard', express.static(path.join()));


app.post('/signup', )


// catch-all route handler for any requests to an unknown route
app.use(function (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
})

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
  console.log(errObj.log)
  return res.status(errObj.status).json(errObj.message)
})

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;