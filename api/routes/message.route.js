const { createMessage, getMessages } = require("../controllers/message.controller");
const verifyToken = require("../middlewares/jwt");

const express= require("express")

const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessages);

module.exports= router;