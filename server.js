const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const fs = require("fs");


// ENABLING FUNCTIONS //

const getTrigs = () => {

    // open and real file contents
    var data = fs.readFileSync(CSV_FILEPATH, 'utf8');


    return convertCSVtoJSON(data)
}

const convertCSVtoJSON = data => {
    var lines = data.split("\n");

    var result = [];

    var headers = lines[0].toLowerCase().replaceAll(" ", "_").split(",");

    for(var i=1; i<lines.length;i++){

        var obj = {};
        var currentline = lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }

    return result;
}


// SERVE ROUTES

// trigs csv filepath
const CSV_FILEPATH = "CompleteTrigArchive.csv"

// import trigs from file into object
const TRIGS = getTrigs();


//console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
})

// a route to request all the trigs wiht default sorting
/*app.get('', (req, res) => {
    res.send({ trigs: trigs });
})*/

