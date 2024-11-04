const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://evildave59:1OheEWCRs1EszPij@react-portfolio.ttfw4.mongodb.net/";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
