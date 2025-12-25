import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json()); // this middleware to parse JSON bodies: req.body
 // app.use(rateLimiter);
 app.use("/api/notes", rateLimiter, notesRoutes);


// simple custom middleware to log request method and url
// app.use((req, res, next) => {
//   console.log(`Request method is ${req.method} and Request URL is ${req.url}`);
//   next();
// })

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
  });
});




