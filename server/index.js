const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/routes");
dotenv.config();
const dbConnect = require("./database/db");
const cors = require("cors");
const app = express();
dbConnect();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: process.env.NODE_ENV === "production" ? "https://file-share-1-ykqs.onrender.com" : "*",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", router);
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
