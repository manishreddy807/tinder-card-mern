const express = require("express");
const router = express.Router();

const tinderCardController = require("../api/controllers/index")

router.post("/", tinderCardController.addTinderCard)
router.get("/", tinderCardController.getTinderCards)

module.exports = router;