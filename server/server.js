const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("boopcamp backend!")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})