const router = require("express").Router();
const User = require("./../controllers/userControllers");

router.get("/user", User.getAllUser);
router.post("/user", User.getPostUser);
router.get("/user/:id", User.getByIdUser);
router.delete("/user/:id", User.getByIdDeleteUser);
router.patch("/user/:id", User.getByIdPatch);
router.put("/user/:id", User.getByIdPut);

module.exports = router;
