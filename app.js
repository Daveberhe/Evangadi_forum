require("dotenv").config();

const express = require("express");
const app = express();
const port = 5500;

// db connection
const dbConnection = require("./db/dbconfig");

// user routes middleware file
const userRoutes = require("./routes/userRoute");

// question routes middleware file
const questionsRoutes = require("./routes/questionRoute");

// authentication middleware file
const AuthMiddleware = require("./middleware/AuthMiddleware");

// json middleware to extract json data
app.use(express.json());

// user routes middleware
app.use("/api/users", userRoutes);

// questions routes middleware??
app.use("/api/questions", AuthMiddleware, questionsRoutes);

// answers routes middleware??

async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    await app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
