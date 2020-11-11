const express = require("express");
const router = express.Router();
const db = require("../knex");

router.get("/", async (_, res) => {
    res.send("campApi working");
});

module.exports = router;