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
  post: Array,
  notifications: Array,
  bio: Object,
});

const User = mongoose.model("Usersss", schema);

module.exports = User;
