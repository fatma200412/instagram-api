const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: String,
  username: String,
  surname: String,
  password: String,
  email: String,
  isPublic: Boolean,
  blockList: Array,
  follower: Array,
  following: Array,
  stories: Array,
  post: [
    {
      imgSRC: { type: String },
      title: { type: String },
      idImg: { type: String },
    },
  ],
  notifications: Array,
  bio: { info: { type: String }, country: { type: String } },
});

const User = mongoose.model("Usersss", schema);

module.exports = User;
