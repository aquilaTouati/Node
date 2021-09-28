const mongoose = require("mongoose");

const schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
  },
  userName: {
    type: string,
  },
  email: {
    type: string,
  },
  phone: {
    type: string,
  },
});

const user = mongoose.model("User", userSchema);

module.exports = User;
