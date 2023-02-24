const express = require("express");
const router = express.Router();
const {Show} = require('../models/index');
const {db} = require('../db');
const {check, validationResult} = require("express-validator");

// GET all shows
router.get('/', async (req, res) => {
    const allShows = await Show.findAll();
    res.json(allShows);
})


// GET shows of a particular genre (genre in req.params)
router.get('/:genre', async (req, res) => {
    const genre = req.params.genre;
    const getShows = await Show.findAll({ where: { genre: genre } });
    res.json(getShows);
})


// GET one show
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const getShow = await Show.findByPk(id);
    res.json(getShow);
})


// PUT update rating of a show that has been watched
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const rating = req.body;
    const updateShow = await Show.update({ rating: rating }, { where: { id: id } });
    res.json(updateShow);
})


// DELETE a show
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deleteShow = await Show.destroy({ where: { id: id } });
    const allShows = await Show.findAll();
    res.json(allShows);
})

module.exports = router;