const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

const UserAPI = require("./controllers/userAPI");
const CampsitesAPI = require("./controllers/campsitesAPI");

app.use(express.json());

app.use(cors());

app.use("/api/users", UserAPI);
app.use("/api/campsites", CampsitesAPI);

// always return the main index.html
app.get("/*", (_, res) => {
    res
      .sendFile(path.join(__dirname, "..", "build", "index.html"))
      .catch((err) => {
        res.status(500).send(err)
      });
  })

app.listen(port, () => {
    console.log(`Listening on port: ${port}!`)
})