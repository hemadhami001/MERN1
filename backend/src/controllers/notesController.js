import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    // send the notes to the frontend
    try {
       const notes = await Note.find().sort({ createdAt: -1 });  // latest notes first
         res.status(200).json(notes); 
    } catch (error) {
        console.error("Error in getAllNotes controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
}

export async function getNoteById(req, res) {
    // send a specific note to the frontend
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
        return;
    }
}

export async function createNote(req, res) {
    // create a new note
    try {
        const { title, content } = req.body;
        const note = new Note({ title:title, content:content });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
       console.error("Error in createNote controller", error);
         res.status(500).json({ message: "Internal Server Error" }); 
    }
    res.status(201).json({ message: "Note created successfully" });
}

export async function updateNote(req, res) {
    // update a note with the given id
    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title:title, content:content},
            { 
                new: true,
             }
        );
        if (!updatedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteNote(req, res) {
    // delete a note with the given id
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ message: `Note with deleted successfully` });
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}