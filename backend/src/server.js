import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);


app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});

// mongodb+srv://hemadhami365_db_user:30ZVTcXUGaCsMvXB@cluster0.0xiwgu2.mongodb.net/?appName=Cluster0