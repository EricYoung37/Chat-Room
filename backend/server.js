const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./test-data/chats");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB(); // must be preceded by dotenv
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use(express.json()); // to accept JSON data

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
