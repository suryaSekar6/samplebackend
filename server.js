const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");   // Import expressjs library
const cors = require("cors");  // Import cors library

const app = express();  // Connecting application with expressjs

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err);
  });

// Routes
app.use("/api/users", require("./Routers/UserRoutes"));