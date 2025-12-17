import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    // send the notes to the frontend
    res.status(200).send("You got 5 notes");
} );


app.listen(5001, () => {
  console.log("Server running on port 5001");
});
