const {sequelize} = require('./db');
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`);
})