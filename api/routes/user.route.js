const express = require("express");
const deleteUser = require("../controllers/user.controller");
const verifyToken = require("../middlewares/jwt");
const getUser = require("../controllers/user.controller");

const router = express.Router();

router.delete("/:id",verifyToken,deleteUser)
router.get("/:id",getUser );



module.exports = router