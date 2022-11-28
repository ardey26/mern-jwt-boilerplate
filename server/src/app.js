const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const api = require("../src/api/index");
const dbConnect = require("./config/db");
const app = express();

app.use(morgan("dev"));
app.use(helmet());

require("dotenv").config({ path: path.resolve(__dirname, "./config/.env") });
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// DATABASE CONFIGS
dbConnect();

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

module.exports = app;
