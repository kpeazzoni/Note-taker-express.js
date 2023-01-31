const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { application } = require('express');
const fs = require('fs');
const newNote=[];


// GET- API/notes function will go here- 


router.get('/', (req, res) => {
    console.log(router);
    res.json(newNote)
});

// POST Route for a new Note
router.post('/notes', (req, res) => {
    if (newNote) {
        const { noteTitle, noteText } = req.body;

        if (req.body) {
            const newNote = {
                noteTitle,
                noteText,
                note_id: uuidv4(),

            };
            const response = {
                status: 'succes',
                body: newNote,
            }
            res.status(201).json(response);



            readAndAppend(newNote, './db/db.json');
            res.json(`Note added successfully 🚀`);
        } else {
            res.status(500).error('Error in adding note');
        }
    }
});

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFileSync(file, parsedData);
      }
    });
  };

module.exports = router;

// BONUS: DELETE NOTE HERE!!!!