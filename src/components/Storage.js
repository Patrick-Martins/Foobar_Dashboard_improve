import React, { useState } from "react";
//import function from the module I created
// import { fetching } from "./modules/database";

export default function Storage({ storage }) {
  return <h3 className="beerStorage">STORAGE: {storage}</h3>;
}