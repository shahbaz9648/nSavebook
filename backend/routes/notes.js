const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

//Route 1: Get all the notes using: GET "/api/notes/fetchallnotes" Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Errored");
    }

});

//Route 2: add a new note using: POST "/api/notes/addnote" Login Required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 5 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('tag', 'tag must be atleast 5 characters').isLength({min: 5})
], async (req, res) => {
    const { title, description, tag } = req.body;
    // if there are errors, return Bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Errored");
    }

});

//Route 3: update an existing note using: PUT "/api/notes/updatenote" Login Required
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;
    try {
        //Create a newNote object
        let newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find the note to be update and update it 
        let note = await Notes.findById(req.params.id);

        if (!note) { return res.status(404).send("Not Found") }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Errored");
    }
})

//Route 4: delete an existing note using: DELETE "/api/notes/deletenote" Login Required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //find the note to be delete and delete it 
        let note = await Notes.findById(req.params.id);

        if (!note) { return res.status(404).send("Not Found") }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "success": "Note has been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Errored");
    }
})

module.exports = router;