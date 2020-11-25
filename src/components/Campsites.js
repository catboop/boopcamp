import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";

import Site from "./Site";

function Campsites() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    async function fetchSites() {
      try {
        console.log("fetching campsites")
        const campsites = await axios.get("/api/campsites");
        console.log("campsites: ", campsites)
        setSites(campsites.data);
      } catch (err) {
        console.log('ERROR FETCHING CAMPSITES: ', err);
      }
    };
    fetchSites();
  }, [])

  return (
    <div className="campsites-container">
      {sites.map((site) => (
        <Site site={site} />
      ))}
    </div>
  );
}

export default hot(module)(Campsites);
