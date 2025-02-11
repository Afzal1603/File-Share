const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  path: {
    type: String,
    require,
  },
  downloadTime: {
    type: Number,
    require,
    default: 0,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
