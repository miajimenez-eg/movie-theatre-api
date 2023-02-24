const express = require("express");
const router = express.Router();
const {User} = require('../models/index');
const {sequelize} = require('../db');
const {check, validationResult} = require("express-validator");

// GET all users


// GET one user


// GET all shows watched by a user (user id in req.params)


// PUT update and add a show if a user has watched it

module.exports = router;