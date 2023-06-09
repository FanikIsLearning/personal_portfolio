process.env.NODE_ENV = process.env.NODE_ENV || "development";
const express = require("./config/express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server running at http://localhost:" + port + "/");
});

module.exports = app;
