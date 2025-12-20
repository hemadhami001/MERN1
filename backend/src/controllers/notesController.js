export const getAllNotes = (req, res) => {
    // send the notes to the frontend
    res.status(200).send("You just fetched the notes successfully");
}

export const createNote = (req, res) => {
    // create a new note
    res.status(201).json({ message: "Note created successfully" });
}

export const updateNote = (req, res) => {
    // update a note with the given id
    res.status(200).json({ message: `Note with id ${noteId} updated successfully` });
}

export const deleteNote = (req, res) => {
    // delete a note with the given id
    res.status(200).json({ message: `Note with id ${noteId} deleted successfully` });
}