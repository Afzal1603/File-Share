const express = require("express");
const router = express.Router();
const upload = require("../middleWare/multer");
const { fileUpload, downloadFile } = require("../controllers/fileController");
router.post("/upload", upload.single("file"), fileUpload);
router.get("/files/:fileId", downloadFile);

module.exports = router;
