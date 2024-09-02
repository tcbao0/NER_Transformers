const path = require("path");
const express = require("express");
require("dotenv").config();

const AppError = require(path.join(__dirname, "utilities", "AppError"));

const globalErrorHandler = require(path.join(
  __dirname,
  "controllers",
  "error"
));

const homeRouter = require(path.join(__dirname, "routes", "home"));
const apiRouter = require(path.join(__dirname, "routes", "api"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  if (req.url === "/favicon.ico") {
    return res.status(204).end();
  }
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", homeRouter);
app.use("/api", apiRouter);

app.all("*", function (req, res, next) {
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
