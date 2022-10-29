const notes = require('express').Router();
const { readFromDb, readAndAppend, writeToDb } = require('../helpers/fsUtils');
const {v4: uuid} = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) =>
    readFromDb().then((data) => res.json(data))
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

notes.delete('/:id', (req, res) => {
    if (req.params.id) {
        const id = req.params.id;
        console.log(id)
        readFromDb().then((notes) => {
            newNotes = notes.filter(note => note.id != id)
            writeToDb(newNotes)
            res.json(newNotes)
        })
    }
})

module.exports = notes;