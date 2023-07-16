const express = require("express");
const verifyToken = require("../middlewares/jwt");
const { createGig, deleteGig, getGig, getGigs } = require("../controllers/gig.controller");

const router = express.Router()

router.post("/",verifyToken,createGig);
router.delete("/:id",verifyToken,deleteGig);
router.get("/single/:id",getGig);
router.get("/",getGigs);

module.exports = router