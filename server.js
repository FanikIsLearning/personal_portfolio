/*  
    File Name: server.js
    Student Name: HOI KIT FAN
    Student ID: 301249275
    Date: 05/29/2023
*/

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const express = require("./config/express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server running at http://localhost:" + port + "/");
});

module.exports = app;
