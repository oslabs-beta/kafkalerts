const authController = {};

authController.createAccount = async (req, res, next) => {
  try {
    //get account info from request body and try and send it into postgres db
    return next();
  } catch (err) {
    return next(err);
  }
};

authController.verifyUser = async (req, res, next) => {
  try {
    //get account info from request body verify against postgres db
    // if () { //no user in db under that username?
    //   return next({ error: 'Incorrect username or password' });
    // }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;
