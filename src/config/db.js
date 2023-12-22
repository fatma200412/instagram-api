const mongoose = require("mongoose"); // new

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("conneted mongodb");
  })
  .catch((err) => {
    console.log("failed", err);
  });
