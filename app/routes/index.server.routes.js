/*  File Name: index.server.routes.js
    Student Name: HOI KIT FAN
    Student ID: 301249275
    Date: 06/09/2023
*/
var express = require("express");
var router = express.Router();
var projectsList = require("../../public/data/projects.json");
var colors = [
  "primary",
  "secondary",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Me" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", {
    title: "Projects",
    projects: projectsList,
    colors: colors,
  });
});

router.post("/submit-contact-form", (req, res) => {
  console.log(req.body); // { firstName: 'John', lastName: 'Doe', ...}
  res.redirect("/");
});

router.use((req, res, next) => {
  res.status(404).redirect("/");
});

module.exports = router;
