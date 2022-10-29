# Note Taker
This repository contains a note taking application. Using a RESTful API built in express, a user is able to GET, POST, and DELETE notes.

This repository utilizes
* JavaScript
* Node
* npm
* express
* uuid
* deployed via heroku

[Deployed Website](https://jjensen-note-taker.herokuapp.com/)

## Installation 

N/A

## Usage 

Enter a note title, and text and save it! You can view old notes by clicking on them. Don't be afraid to delete old notes ;)

## Code Snippets
In order to enable users to DELETE notes, a DELETE route is defined.
```Javascript
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
```
The id of the desired note is passed via the request parameters and notes are filtered for those that do not have this id.



## License

Refer to the license in the Github repo.
