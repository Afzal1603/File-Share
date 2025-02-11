const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/routes");
dotenv.config();
const dbConnect = require("./database/db");
const cors = require("cors");
const app = express();
dbConnect();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api", router);
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
