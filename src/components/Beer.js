import React, { useState } from "react";
import Storage from "./Storage";
//import function from the module I created
// import { fetching } from "./modules/database";

export default function Beer(props) {
  const storageBeer = props.storage.map((beerStorage) => {
    if (props.name === beerStorage.name) {
      return <Storage storage={beerStorage.amount} />;
    }
  });
  //   const [beerLeft, setLevel] = useState([]);

  console.log("PROPS>STORAGE IS");
  //   console.log(props.storage.amount);
  //   console.log(Object.values(props.storage));

  return (
    <div className="beer">
      <p className="beerName">NAME: {props.name}</p>
      <h3 className="beerTap">LEVEL: {props.level}</h3>
      {storageBeer}
    </div>
  );
}
