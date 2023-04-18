const cookieController = {};

cookieController.setCookie = async (req, res, next) => {
  try {
    //set cookie so the front end can check for it?
    res.cookie('cookieID', res.locals.cookieID);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = cookieController;
