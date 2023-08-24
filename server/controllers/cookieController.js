const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  // console.log('we made it to set cookie lol');
  // console.log('verified', res.locals.isVerified);
  // if (res.locals.isVerified) {
  //   console.log('cookieID', res.locals.cookieID);
  //   res.cookie('cookieID', res.locals.cookieID);
  // }
  return next();
};
module.exports = cookieController;
