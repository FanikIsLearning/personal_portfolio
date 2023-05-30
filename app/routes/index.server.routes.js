/*  File Name: app.css
    Student Name: HOI KIT FAN
    Student ID: 301249275
    Date: 05/29/2023
*/
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me" });
});

router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact" });
});

router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

router.get("/products", function (req, res, next) {
  res.render("index", { title: "Products" });
});

module.exports = router;
