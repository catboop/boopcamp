const express = require("express");
const router = express.Router();
const db = require("../knex.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// TODO : create token and send back during login request

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body

    // check if username already exists
    const user = await db("users").select("*").where({username});
    if (user.length > 0) {
      res.json("Username already exists.");
    };

    // create hash of pw to store in db
    const password_digest = await bcrypt.hash(password, saltRounds);

    // insert into db
    await db("users").insert({ username, password_digest, token: "token" })

    // send back id, username, and token
    res.status(200).json("token");
    
  } catch (e) {
    console.log(e);
    res.status(500).send("Unable to register. Try again later.")
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body
    
    // get user from database
    const user = await db("users").select("*").where({username});
    
    // check if user exists
    if (user.length > 0) {

      // check if password is correct
      const validPassword = await bcrypt.compare(password, user[0].password_digest);      
      if (validPassword) {
        res.status(200).json("token")
      } else {
        res.json("Wrong password!")
      }

    // if user doesn't exist in db
    } else {
      res.status(404).json("User not found.")
    }
    
  } catch (e) {
    console.log(e);
    res.status(500).send("Unable to log in. Try again later.")
  }
})

module.exports = router;
