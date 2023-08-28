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

function splitIntoPages(data, numPerPage){

  const paginatedData = data.reduce((pages, item, index) => {
    const pageNum = Math.floor(index/numPerPage);
    const numOfPages = Math.ceil(data.length / numPerPage)

    if(!pages[pageNum]) pages[pageNum] = {
      pageNum: pageNum,
      numOfPages: numOfPages,
      pageData :[]
    };

    pages[pageNum].pageData.push(item);

    return pages;
  }, []);

  return paginatedData;
}

class Helpers {

  static readTrigsFile = (csvFilepath) => {

    // open and real file contents
    var data = fs.readFileSync(csvFilepath, 'utf8');

    var data = convertCSVtoJSON(data);
    var data = splitIntoPages(data, 10);

    return data;
  }
}

module.exports = Helpers;
