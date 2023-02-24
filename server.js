const {db} = require('./db');
const express = require("express");
const app = express();
const port = 3000;
const user = require('./routers/userRouter');
const show = require('./routers/showRouter');

app.use(express.json());
app.use('/users', user);
app.use('/shows', show);

app.listen(port, () => {
    db.sync();
    console.log(`Listening on port ${port}`);
})