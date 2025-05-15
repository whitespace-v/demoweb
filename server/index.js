const express = require("express");
require("dotenv").config();
require("./storage/models");
const cors = require('cors')
const sequelize = require("./storage/database");
const router = require("./routes/index");

const start = async () => {
  try {
    const PORT = process.env.PORT;
    const app = express();
    app.use(cors())
    app.use(express.json())
    await sequelize.authenticate();
    await sequelize.sync();

    app.use("/", router);
    app.listen(PORT, () => console.log(`Server is Started ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
