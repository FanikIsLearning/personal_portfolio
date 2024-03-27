/*  
    File Name: index.server.controller.js
    HOI KIT FAN
*/
exports.render = function (req, res) {
  res.render("index", {
    title: "Personal Portfolio",
  });
};
