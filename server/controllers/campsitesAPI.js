const express = require("express");
const router = express.Router();
const db = require("../knex.js");

// get all campsites
router.get("/", async (_, res) => {
  try {
    const campsites = await db.select("*").table("campsites");
    console.log("campsites: ", campsites);
    res.send(campsites);
  } catch (err) {
    //If error occur, send 500 status code
    console.log(err)
    res.sendStatus(500);
  }
});

// add new campsite
router.post("/", async (req, res) => {
  try {
    const campsites = await db("campsites").insert({...req.body})

    // TODO:send back all campsites?
  } catch (err) {
    //If error occur, send 500 status code
    console.log(err)
    res.status(500).send("Unable to add campsite. Try again later.");
  }
});

// edit existing campsite

// delete existing campsite

module.exports = router;
