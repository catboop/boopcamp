import React from "react";
import { hot } from "react-hot-loader";

function Site({ site}) {

  return (
    <div className="site-container">
      <img className="site-img" src={site.url_to_image}></img>
      <div>{site.name}</div>
      <div>{site.address}</div>
    </div>
  );
}

export default hot(module)(Site);
