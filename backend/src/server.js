import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);


app.listen(5001, () => {
  console.log("Server running on port 5001");
});

// mongodb+srv://hemadhami365_db_user:30ZVTcXUGaCsMvXB@cluster0.0xiwgu2.mongodb.net/?appName=Cluster0