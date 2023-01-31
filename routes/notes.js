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
      title,
      text,
      note_id: uuidv4()
    };
    
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.status(500).error('Error in adding note');
  }
});


const readAndAppend = (content, file) => {
  
  fs.readFile(file, 'utf8', (err, data) => {
    console.log('starting to create the file....');
    if (err) {
      console.log('error creating file....');
    } else {
      console.log('creating file....');
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      const json = JSON.stringify(parsedData, null, 4);
      fs.writeFile(file, json, 'utf8', () => {console.log('file successfully created')});
    }
  });
};

module.exports = router;

// BONUS: Add delete NOTES