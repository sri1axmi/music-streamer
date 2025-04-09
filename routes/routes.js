const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const loginPath = path.join(__dirname, "../public/");
// router.use(express.static(loginPath));

router.get("/sign", function (req, res) {
  res.sendFile(path.join(loginPath, "signup.html"));
});

router.get("/", function (req, res) {
  res.sendFile(path.join(loginPath, "login.html"));
});

module.exports = router;
