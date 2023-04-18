const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  console.log('we made it to set cookie lol')
  console.log(res.locals.cookieID)
  res.cookie('cookieID', res.locals.cookieID);
  return next();


  // try {
  //   //set cookie so the front end can check for it?
  //   res.cookie('cookieID', res.locals.cookieID);
  //   return next();
  // } catch (err) {
  //   return next(err);
  // }
};

module.exports = cookieController;
