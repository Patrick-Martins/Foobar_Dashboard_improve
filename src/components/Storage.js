import React, { useState } from "react";
//import function from the module I created
// import { fetching } from "./modules/database";

export default function Storage({ storage }) {
  return (
    <div className="beerStorage">
      <h3> +{storage}</h3>
    </div>
  );
}
