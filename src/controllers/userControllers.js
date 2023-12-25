const User = require("./../models/userModels");

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};

const getPostUser = async (req, res) => {
  let userId = await User.findOne({ id: req.body.id });
  if (userId) {
    res.send("<h1>Bele id var!</h1>");
  } else {
    let newUser = new User(req.body);
    newUser.id = User.length + 1;
    console.log("length", User.length);
    newUser.save();
  }
};

const getByIdUser = async (req, res) => {
  const id = req.params.id;
  let findUserId = await User.findOne({ id: id });
  if (findUserId) {
    res.send(findUserId);
  } else {
    res.send("<h1>User yoxdu!</h1>");
  }
};

const getByIdDeleteUser = async (req, res) => {
  const id = req.params.id;
  let deleteuser = await User.deleteOne({ id: id });
  if (deleteuser) {
    res.send(deleteuser);
  } else {
    res.send("<h1>User yoxdu!</h1>");
  }
};

const getByIdPatch = async (req, res) => {
  const id = req.params.id;
  if (id) {
    let updateUserPatch = await User.findOneAndUpdate({ id: id }, req.body);
  } else {
    res.send("<h1>User yoxdu!</h1>");
  }
};

const getByIdPut = async (req, res) => {
  const id = req.params.id;
  if (id) {
    let updateUserPatch = await User.replaceOne({ id: id }, req.body);
  } else {
    res.send("<h1>User yoxdu!</h1>");
  }
};

module.exports = {
  getAllUser,
  getPostUser,
  getByIdUser,
  getByIdDeleteUser,
  getByIdPatch,
  getByIdPut,
};
