const express = require('express')
const app = express();
const port = process.env.PORT || 4000;

//making use of the express router
const routes = require('./routes')
app.use('/', routes);

app.listen(port, function () {
    console.log("Listening on port " + port);
});