const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const fs = require("fs")

const Helpers = require('./helpers/index');

// trigs csv filepath
const CSV_FILEPATH = "CompleteTrigArchive.csv"

// import trigs from file into object
const TRIGS = Helpers.readTrigsFile(CSV_FILEPATH);


//console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
})

// a route to request all the trigs wiht default sorting and default page 1
app.get('/trigs', (req, res) => {
    console.log('blob');
    res.send(TRIGS[0]);
});

