function globalErrorHandler(error, req, res, next) {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  res.render("error", {
    statusCode: error.statusCode,
    status: error.status,
    message: error.message,
  });
}

module.exports = globalErrorHandler;
