const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    const newNote  = {
        title,
        text,
        id: uuid(),
    };
    readAndAppend(newNote, './db/db.json');


    const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    }
)

module.exports = notes;