const express = require("express");
const router = express.Router();
const {Show} = require('../models/index');
const {sequelize} = require('../db');
const {check, validationResult} = require("express-validator");

// GET all shows


// GET one show


// GET shows of a particular genre (genre in req.params)


// PUT update rating of a show that has been watched


// DELETE a show

module.exports = router;