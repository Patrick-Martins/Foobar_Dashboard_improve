import React from "react";
import Storage from "./Storage";
import { ReactComponent as BeerKeg } from "../images/svgs/keg.svg";
import "../styling/beer.css";

//All beers images sources
import githop from "../images/beers/githop.png";
import steampunk from "../images/beers/steampunk.png";
import fairytaleale from "../images/beers/fairytaleale.png";
import row26 from "../images/beers/row26.png";
import hoppilyeverafter from "../images/beers/hoppilyeverafter.png";
import ruinedchildhood from "../images/beers/ruinedchildhood.png";
import sleighride from "../images/beers/sleighride.png";
import elhefe from "../images/beers/elhefe.png";
import hollaback from "../images/beers/hollaback.png";
import mowintime from "../images/beers/mowintime.png";

export default function Beer(props) {
  const storageBeer = props.storage.map((beerStorage, index) => {
    if (props.name === beerStorage.name) {
      return <Storage key={beerStorage.name + index} storage={beerStorage.amount} />;
    }
  });

  let beerName = props.name;
  let imagePath = "";

  //replace all spaces with empty and set to lowercase
  beerName = beerName.replace(/ /g, "").toLowerCase();

  if (beerName === "githop") {
    imagePath = githop;
  } else if (beerName === "steampunk") {
    imagePath = steampunk;
  } else if (beerName === "fairytaleale") {
    imagePath = fairytaleale;
  } else if (beerName === "row26") {
    imagePath = row26;
  } else if (beerName === "hoppilyeverafter") {
    imagePath = hoppilyeverafter;
  } else if (beerName === "ruinedchildhood") {
    imagePath = ruinedchildhood;
  } else if (beerName === "sleighride") {
    imagePath = sleighride;
  } else if (beerName === "elhefe") {
    imagePath = elhefe;
  } else if (beerName === "hollabacklager") {
    imagePath = hollaback;
  } else if (beerName === "mowintime") {
    imagePath = mowintime;
  }
  const beerImage = <img src={imagePath} alt="image keg" className="beerImage" />;

  //CHECK LEVEL------------------
  let classLevel = "percent0";
  checkLevel();

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
      <div className="keg-container">
        <BeerKeg className={classLevel} />
        {beerImage}
      </div>
      <h3 className="beerName">{props.name}</h3>
      {storageBeer}
    </div>
  );
}
