import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./images/dxc43.png";
import BeerKegs from "./components/BeerKegs";
import Bartenders from "./components/Bartenders";
import Queue from "./components/Queue";
import Serving from "./components/Serving";
//import function from the module I created
import { fetching } from "./modules/database";

export default function App() {
  //STATE----
  //when i call setBeers it returns an array, with the beers
  //when I call set beers, whatever i put inside setBeers, is the value of {beers}
  const [beers, setBeers] = useState([]);
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    //setBeers is the callback function of the getCards
    fetching.getTaps(setBeers);
  }, []);

  useEffect(() => {
    //setStorage is the callback function of the getCards
    fetching.getBeersStorage(setStorage);
  }, []);

  // fetching.getData();
  return (
    <div className="Dashboard">
      <header>
        {/* <img src={Logo} alt="" /> */}
        <h1 className="foobar">Foobar</h1>
        <h2>Wainting time 6 min...</h2>
      </header>
      <div className="container-infoSections">
        <BeerKegs availableBeers={beers} onStorage={storage} />
        <Bartenders />
        <Serving />
        <Queue />
      </div>
    </div>
  );
}
