const express = require("express");
const router = express.Router();
const db = require("../knex.js");

// get all campsites
router.get("/", async (_, res) => {
  try {
    const campsites = await db.select("*").table("campsites");
    
    res.status(200).json(campsites);

  } catch (err) {
    //If error occur, send 500 status code
    console.log(err)
    res.sendStatus(500).send(err);
  }
});

// add new campsite
router.post("/", async (req, res) => {
  try {
    const { name } = req.body
    const existingSite = await db("campsites").select("*").where({ name })
    
    // if site already exists, send conflict status code
    if (existingSite.length > 0) {
      res.sendStatus(409);

    } else {
      await db("campsites").insert({...req.body});
  
      const campsites = await db("campsites").select("*");
  
      res.status(200).json(campsites);
    }
  } catch (err) {
    //If error occur, send 500 status code
    console.log(err);
    res.status(500).send(err);
  }
});

// edit existing campsite

// delete existing campsite

module.exports = router;
