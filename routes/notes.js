// declaring variables
const router = require('express').Router(); // router method
const db = require('../db/db.json'); //requiring database
const { v4: uuidv4 } = require('uuid'); // this will create a unique id
const { application } = require('express'); 
const fs = require('fs');
const { route } = require('.'); 


// GET- API/notes function will go here- 

router.get('/', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
    } else {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    }
  })
});

// POST Route for a new Note
router.post('/', (req, res) => {

  if (req.body) {
    const { title, text } = req.body;
    const newNote = {
      title,
      text,
      id: uuidv4()
    };
// read and write to database
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.status(500).error('Error in adding note');
  }
});

// this isn't working and I don't know why
router.delete('/:id', (req, res) =>{
  console.log(req.params.id);
  console.log(` ${req.method} note received for ${req.params.id}`);
  
  fs.readFile('./db/db.json', 'utf8', (err,data) => {
    const notesData = JSON.parse(data)
    for (let note of notesData) {
      if (req.params.id === note.id) {
        let index = notesData.indexOf(note);
        console.log("index", index);
        notesData.splice(index, 1);
        console.log("notesDdata", notesData);

        fs.writeFile('./db/db.json', JSON.stringify(notesData, null, 4), 
        (err) => err ? console.log(err) : console.log('That is a wrap! Your note has been deleted.'));
      }
    }
    res.json(notesData);
  })
  });

  // router.put('/:id', (req, res) =>{
  //   console.log(req.params.id);
  //   console.log(` ${req.method} note received for ${req.params.id}`);
    
  //   fs.readFile('./db/db.json', 'utf8', (err,data) => {
  //     const notesData = JSON.parse(data)
  //     for (let note of notesData) {
  //       if (req.params.id === note.id) {
  //         let index = notesData.indexOf(note);
  //         console.log("index", index);
  //         notesData.splice(index, 1);
  //         console.log("notesDdata", notesData);
  
  //         fs.writeFile('./db/db.json', JSON.stringify(notesData, null, 4), 
  //         (err) => err ? console.log(err) : console.log('That is a wrap! Your note has been deleted.'));
  //       }
  //     }
  //     res.status(200)
  //   })
  // });

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

// this exports the module 
module.exports = router;

// BONUS: Add delete NOTES