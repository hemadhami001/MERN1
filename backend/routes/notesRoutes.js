import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController";

const router = express.Router(); 

// What is end point?
// An end point is a combination of a URL + HTTP method that lets the client interact with a specific resource on the server.

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;