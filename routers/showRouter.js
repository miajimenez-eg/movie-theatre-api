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

// GET one show
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const getShow = await Show.findByPk(id);
    res.json(getShow);
})

// GET shows of a particular genre (genre in req.params)
router.get('/genres/:genre', async (req, res) => {
    const genre = req.params.genre;
    const getShows = await Show.findAll({ where: { genre: genre } });
    res.json(getShows);
})

// PUT update rating of a show that has been watched
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const show = await Show.findByPk(id);
    let rating;
    while(rating < 5){
        rating ++;
        const updateShow = await Show.update({ rating: rating }, { where: { id: id } });
    }
    const updatedShow = await Show.findByPk(id);
    res.json(updatedShow);
})

// PUT update status
router.put('/:id/cancel', async (req, res) => {
    const id = req.params.id;
    const show = await Show.findByPk(id);
    const updateShow = await Show.update({status: "cancelled"}, {where: { id: id } });
    const getUpdatedShow = await Show.findByPk(id);
    res.json(getUpdatedShow);
})

router.put('/:id/ongoing', async (req, res) => {
    const id = req.params.id;
    const show = await Show.findByPk(id);
    const updateShow = await Show.update({status: "on-going"}, {where: { id: id } });
    const getUpdatedShow = await Show.findByPk(id);
    res.json(getUpdatedShow);
})

// DELETE a show
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deleteShow = await Show.destroy({ where: { id: id } });
    const allShows = await Show.findAll();
    res.json(allShows);
})


module.exports = router;