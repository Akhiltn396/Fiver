const { createConversation, updateConversation,getConversations,getSingleConversation } = require("../controllers/conversation.controller");
const verifyToken = require("../middlewares/jwt");
const express = require("express")

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);
router.put("/:id", verifyToken, updateConversation);

module.exports = router