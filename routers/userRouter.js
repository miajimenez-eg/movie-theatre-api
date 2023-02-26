const express = require("express");
const router = express.Router();
const {User} = require('../models/index');
const {Show} = require('../models/index');
const {db} = require('../db');
const {check, validationResult} = require("express-validator");

// GET all users
router.get('/', async (req, res) => {
    const allUsers = await User.findAll();
    res.json(allUsers);
})

// GET one users
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const getUser = await User.findByPk(id);
    res.json(getUser);
})

// GET all shows watched by a user (user id in req.params)
router.get('/:id/shows', async (req, res) => {
    const id = req.params.id;
    const getShows = await Show.findAll({ where: { userId: id } });
    res.json(getShows);
})


// PUT update and add a show if a user has watched it
router.put('/:id/shows/:showId', async (req, res) => {
    const id = req.params.id;
    const showId = req.params.showId;
    const show = await Show.findByPk(showId);
    const user = await User.findByPk(id);
    await user.addShow(show)
    const updatedUser = await User.findAll(
        {
            where: { id: id },
            include: Show
        }
    );
    res.json(updatedUser);
})

module.exports = router;