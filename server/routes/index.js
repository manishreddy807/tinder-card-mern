const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    return res.status(200).send({
        Message : "Welcome to tinder api"
    })
})


module.exports = router;