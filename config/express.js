/*  
    File Name: express.js
    Student Name: HOI KIT FAN
    Student ID: 301249275
    Date: 05/29/2023
*/

var express = require("express"),
  morgan = require("morgan"),
  compress = require("compression"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

module.exports = function () {
  var app = express();
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }

  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static("public"));

  app.set("views", "./app/views");
  app.set("view engine", "ejs");

  var routes = require("../app/routes/index.server.routes.js");
  app.use("/", routes);

  return app;
};
