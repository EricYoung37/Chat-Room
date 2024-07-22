const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./test-data/chats");
const connectDB = require("./config/db");

dotenv.config();
connectDB(); // must be preceded by dotenv
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
