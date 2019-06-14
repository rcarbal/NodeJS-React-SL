const express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();

mongoose.connect("mongodb://localhost/smoothlegal", { useNewUrlParser: true }, () => {
    console.log("Connected to mongoDB");
});

router.post("/api/v1/paid", (req, res) => {
    //Saved to database

    // Information sent to email
    email.sendEmail();

    // respond sucessful process

    res.send("Form email success.");
});

module.exports = router;