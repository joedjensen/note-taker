const fs = require('fs');
const util = require('util');

// promisified version of readFile
const readDb = util.promisify(fs.readFile)

// helper function to read from db and parse data
function readFromDb() {
  return readDb("./db/db.json").then(data => JSON.parse(data))
}

// promisified version of writeFile
const writeDb = util.promisify(fs.writeFile)

// helper function to stringify data and write to db
function writeToDb(data){
  return writeDb('./db/db.json', JSON.stringify(data)).then(console.info(`\nData written to database`))
}

// helper function to read from db, append a result, and write to db
function readAndAppend(content){
  readFromDb().then((data) => {
    data.push(content)
    writeToDb(data)
    }
  )
}

module.exports = { readFromDb, writeToDb, readAndAppend };
