const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydata');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
    console.log('Listening on the port 4000');
})