import React, { useState } from "react";
import { hot } from "react-hot-loader";

import Site from "./Site";

function Campsites() {
  // sample data
  const [sites, setSites] = useState([
    {
      name: "Test",
      address: "address address address",
      url_to_image:
        "https://images.unsplash.com/photo-1488790881751-9068aa742b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    },
    {
      name: "Test",
      address: "address address address",
      url_to_image:
        "https://images.unsplash.com/photo-1488790881751-9068aa742b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    },
    {
      name: "Test",
      address: "address address address",
      url_to_image:
        "https://images.unsplash.com/photo-1488790881751-9068aa742b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    },
    {
      name: "Test",
      address: "address address address",
      url_to_image:
        "https://images.unsplash.com/photo-1488790881751-9068aa742b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    },
  ]);

  return (
    <div className="campsites-container">
      {sites.map((site) => (
        <Site site={site} />
      ))}
    </div>
  );
}

export default hot(module)(Campsites);
