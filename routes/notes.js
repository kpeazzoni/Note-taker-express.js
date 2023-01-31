const router = require('express').Router();
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { application } = require('express');
const fs = require('fs');


// GET- API/notes function will go here- 

router.get('/', (req, res) => {

    res.json(db);
});

// POST Route for a new Note
router.post('/', (req, res) => {

        if (req.body) {
            const { title, text } = req.body;
            const newNote = {
                title: title,
                text: text,
                note_id: uuidv4()
            };     

            readAndAppend(res, newNote, './db/db.json');
            res.json(`Note added successfully 🚀`);
        } else {
            res.status(500).error('Error in adding note');
        }
    });

    
const readAndAppend = (res, content, file) => {
    fs.readFileSync(file, 'utf8', (err, data) => {
      if (err) {
        res.json(`failed to write note`);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);   
        fs.writeFileSync(file, JSON.stringify(parsedData, null, 4));
        res.json(`new note created`);
      }
    });
   

module.exports = router;

// BONUS: DELETE NOTE HERE!!!!