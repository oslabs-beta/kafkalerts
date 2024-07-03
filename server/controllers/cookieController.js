const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  // console.log('verified', res.locals.isVerified);
  // if (res.locals.isVerified) {
  //   console.log('cookieID', res.locals.cookieID);
  //   res.cookie('cookieID', res.locals.cookieID);
  // }
  return next();
};
export default cookieController;
// module.exports = cookieController;
