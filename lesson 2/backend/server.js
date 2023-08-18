const express = require("express");
const path = require("path");
const configPath = path.join(__dirname, "..", "config", ".env");

const errorHandler = require("./middlewares/errorHandler");

const connectDB = require("../config/connectDB");

require("colors");
require("dotenv").config({ path: configPath });

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/v1", require("./routes/filmsRoutes"));

app.use(errorHandler);

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green.italic.bold);
});
