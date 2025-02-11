const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
  }
};

module.exports = dbConnect;
