const fs = require('fs');

function convertCSVtoJSON(data){
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

class Helpers {

    static readTrigsFile = (csvFilepath) => {

        // open and real file contents
        var data = fs.readFileSync(csvFilepath, 'utf8');

        return convertCSVtoJSON(data)
    }
}

module.exports = Helpers;
