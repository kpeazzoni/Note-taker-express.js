// User Story
// AS A small business owner
// I WANT to be able to write and save notes
// SO THAT I can organize my thoughts and keep track of tasks I need to complete



// Acceptance Criteria
// GIVEN a note-taking application

// WHEN I open the Note Taker
        // this should be done for us in public folder- index.html & note.html


// THEN I am presented with a landing page with a link to a notes page
        // This is the index.js folder in the public / assets / js  folder

// WHEN I click on the link to the notes page

        // this will take us to the notes.html- route the data to the notes.js file


// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

        // GET- API/notes function will go here- 

        //  const router = require('express').Router();
        // router.get('/', (req, res) => {
        //    let results = newNote []
            // res.json(results); });
          
        //   // POST Route for a new UX/UI tip
        //   router.post('/notes', (req, res) => {
        //   if (newNote) {
//             const { noteTitle, noteText} = req.body;

//   if (req.body) {
//     const newNote = {
//       noteTitle,
//       noteText,
//       note_id: uuidv4(),
//     };

//     readAndAppend(newNote, './db/notes.json');
//     res.json(`Note added successfully 🚀`);
//   } else {
//     res.error('Error in adding note');
//   }
// });
  // }
      // }
     //   module.exports = router;

// BONUS: DELETE NOTE HERE!!!!
    
  

// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page


// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

// Mock-Up
// The following images show the web application's appearance and functionality:

// Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.

// Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.

// Getting Started
// On the back end, the application should include a db.json file that will be used to store and retrieve notes using the fs module.

// The following HTML routes should be created:

// GET /notes should return the notes.html file.

// GET * should return the index.html file.

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// Bonus
// You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.