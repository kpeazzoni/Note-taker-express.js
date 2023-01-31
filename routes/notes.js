// declaring variables
const router = require('express').Router(); // router method
const db = require('../db/db.json'); //requiring database
const { v4: uuidv4 } = require('uuid'); // this will create a unique id
const { application } = require('express'); 
const fs = require('fs');
const { route } = require('.'); 


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
// read and write to database
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

router.delete('./db.json/:id', (req, res) =>{
  console.log(` ${req.method} note received for ${req.params.id}`);
  
  fs.readFile('./db/db.json', 'utf8', (err,data) => {
  let notesData = JSON.parse(data)
  for (let note of notesData) {
    if (req.params.id == note.id);
    let index = notesData.indexOf(note);
    notesData.splice(index, 1);
    fs.writeFile('./db/db.json,', JSON.stringify(notesData, null, 4));
  }
  })
  res.json(notes);
  });

// this exports the module 
module.exports = router;

// BONUS: Add delete NOTES