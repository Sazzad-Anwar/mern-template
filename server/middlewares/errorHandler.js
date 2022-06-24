const Errors = require("../models/errorLogs.js");
const { logger } = require("./loggerMiddleware.js");

//Description: Handle the error and throw the error in API response instead crashing the applicaiton
async function errorHandler(err, req, res, next) {
  const statusCode = err.isJoi
    ? 422
    : res.statusCode === 200
      ? 500
      : res.statusCode;

  res.status(statusCode);

  if (process.env.NODE_ENV === "development") {
    console.log(`${err.stack}`);
  }

  if (err) {
    let newError = new Errors({
      message: err.message,
      IP: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      stack: err.stack,
    });

    if (process.env.NODE_ENV === "production" && statusCode === 500) {
      await newError.save();
      logger(
        err.message,
        err.stack,
        req.headers["x-forwarded-for"] || req.socket.remoteAddress
      );
    }

    res.json({
      message: err.message,
      isSuccess: false,
      stack:
        process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test"
          ? null
          : err.stack,
    });
  } else {
    next();
  }
}

//Description: Show an error message on API response if the route is not defined
function notFound(req, res, next) {
  const error = new Error(`${req.method}:${req.originalUrl} is Not Found`);
  res.status(404);
  next(error);
}

module.exports = {
  errorHandler,
  notFound,
};
