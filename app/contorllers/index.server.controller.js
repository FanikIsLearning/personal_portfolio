/*  
    File Name: index.server.controller.js
    Student Name: HOI KIT FAN
    Student ID: 301249275
    Date: 06/09/2023
*/
exports.render = function (req, res) {
  res.render("index", {
    title: "Personal Portfolio",
  });
};
