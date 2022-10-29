const fs = require('fs');
const util = require('util');

const readDb = util.promisify(fs.readFile)

function readFromDb() {
  return readDb("./db/db.json").then(data => JSON.parse(data))
}

const writeDb = util.promisify(fs.writeFile)

function writeToDb(data){
  return writeDb('./db/db.json', JSON.stringify(data)).then(console.info(`\nData written to database`))
}

function readAndAppend(content){
  readFromDb().then((data) => {
    data.push(content)
    writeToDb(data)
    }
  )
}

module.exports = { readFromDb, writeToDb, readAndAppend };
