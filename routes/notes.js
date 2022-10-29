const notes = require('express').Router();
const { readFromDb, readAndAppend, writeToDb } = require('../helpers/fsUtils');
const {v4: uuid} = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) =>
    readFromDb().then((data) => res.json(data))
);

//POST route for adding a new note
notes.post('/', (req, res) => {
    // grab title and text from request body
    const { title, text } = req.body;
    // create a uuid for the note
    const newNote  = {
        title,
        text,
        id: uuid(),
    };
    //add note to database
    readAndAppend(newNote);
    
    //create response to send back
    const response = {
        status: 'success',
        body: newNote,
      }; 
      res.json(response);
    }
)

// delete utilized request parameters
notes.delete('/:id', (req, res) => {
    if (req.params.id) {
        readFromDb().then((notes) => {
            // filter for notes that do not have the selected ID
            newNotes = notes.filter(note => note.id != req.params.id)
            writeToDb(newNotes)
            res.json(newNotes)
        })
    }
})

module.exports = notes;