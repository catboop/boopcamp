const express = require("express");
const app = express();
const path = require('path'); 
const port = process.env.PORT || 4000;
const cors = require("cors");

const UserAPI = require("./controllers/userAPI");
const CampsitesAPI = require("./controllers/campsitesAPI");

app.use(express.json());

app.use(cors());

app.use("/api/users", UserAPI);
app.use("/api/campsites", CampsitesAPI);

app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})