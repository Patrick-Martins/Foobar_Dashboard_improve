import React, { useState } from "react";
import Storage from "./Storage";
import { fetching } from "../modules/database";
import { ReactComponent as BeerKeg } from "../images/svgs/keg.svg";
import "../styling/beer.css";
//import function from the module I created
// import { fetching } from "./modules/database";

export default function Beer(props) {
  const storageBeer = props.storage.map((beerStorage) => {
    if (props.name === beerStorage.name) {
      return <Storage storage={beerStorage.amount} />;
    }
  });

  //   const [beerLeft, setLevel] = useState([]);

  //   console.log(props.storage.amount);
  //   console.log(Object.values(props.storage));

  let classLevel = "percent0";
  checkLevel();
  //Check level
  function checkLevel() {
    const level = props.level;
    const total = 2500;
    if ((level / total) * 100 > 90) {
      classLevel = "";
    } else if ((level / total) * 100 > 80) {
      classLevel = "percent10";
    } else if ((level / total) * 100 > 70) {
      classLevel = "percent20";
    } else if ((level / total) * 100 > 60) {
      classLevel = "percent30";
    } else if ((level / total) * 100 > 50) {
      classLevel = "percent40";
    } else if ((level / total) * 100 > 40) {
      classLevel = "percent50";
    } else if ((level / total) * 100 > 30) {
      classLevel = "percent60";
    } else if ((level / total) * 100 > 20) {
      classLevel = "percent70";
    } else if ((level / total) * 100 > 10) {
      classLevel = "percent80";
    } else if ((level / total) * 100 > 0) {
      classLevel = "percent90";
    } else if ((level / total) * 100 == 0) {
      classLevel = "percent100";
    }
  }

  return (
    <div className="beer">
      <BeerKeg className={classLevel} />
      <h3 className="beerName">{props.name}</h3>
      <h3 className="beerTap">LEVEL: {props.level}</h3>
      {storageBeer}
    </div>
  );
}
