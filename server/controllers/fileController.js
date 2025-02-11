const multer = require("multer");
const File = require("../model/fileModel");
const fileUpload = async (req, res) => {
  const fileObj = {
    name: req.file.originalname,
    path: req.file.path,
  };
  try {
    const file = await File.create(fileObj);
    return res
      .status(200)
      .json({ path:process.env.NODE_ENV==="production"?`https://file-share-8i1y.onrender.com`:`http://localhost:5000/api/files/${file._id}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error uploading file" });
  }
};

const downloadFile = async (req, res) => {
  const fileId = req.params.fileId;
  try {
    const file = await File.findById(fileId);
    console.log(file);
    file.downloadTime++;
    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error downloading file" });
  }
};

module.exports = { fileUpload, downloadFile };
