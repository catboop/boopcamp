const express = require("express");
const router = express.Router();
const db = require("../knex");
const bcrypt = require("bcrypt");

router.get("/", async (_, res) => {
    res.send("userApi working");
});

module.exports = router;