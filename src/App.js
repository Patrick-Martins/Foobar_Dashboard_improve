import React, { useState, useEffect } from "react";
import "./App.css";
import BeerKegs from "./components/BeerKegs";
import Bartenders from "./components/Bartenders";
import Queue from "./components/Queue";
import Serving from "./components/Serving";
//import function from the module I created
import { fetching } from "./modules/database";
import FoobarLogo from "./images/moonbar_logo_white.png";

//GSAP
import { gsap } from "gsap";
import { TweenLite } from "gsap/all";
import { TweenMax } from "gsap/all";
import { Power1 } from "gsap/all";
import { Bounce } from "gsap/all";
import { Elastic } from "gsap/all";
import { _createElement } from "gsap/CSSPlugin";

export default function App() {
  //STATE----
  //when i call setBeers it returns an array, with the beers
  //when I call set beers, whatever i put inside setBeers, is the value of {beers}
  const [beers, setBeers] = useState([]);
  const [storage, setStorage] = useState([]);
  const [serving, setServing] = useState([]);
  const [queue, setQueue] = useState([]);
  const [bartenders, setBartenders] = useState([]);

  // setInterval(() => fetching.fetchBar(setBeers, setStorage, setServing, setQueue, setBartenders), 5000);

  useEffect(() => {
    //setBeers is the callback function of the getCards
    fetching.fetchBar(setBeers, setStorage, setServing, setQueue, setBartenders);
  }, []);

  // useEffect(() => {
  //   //setBeers is the callback function of the getCards
  //   fetching.getTaps(setBeers);
  // }, []);

  // useEffect(() => {
  //   //setStorage is the callback function of the getCards
  //   fetching.getBeersStorage(setStorage);
  // }, []);

  // useEffect(() => {
  //   //setStorage is the callback function of the getCards
  //   fetching.getServing(setServing);
  // }, []);

  // useEffect(() => {
  //   //setStorage is the callback function of the getCards
  //   fetching.getQueue(setQueue);
  // }, []);

  // fetching.getData();

  //GSAP

  // gsap.fromTo(`html body div#root div.Dashboard div.container-infoSections section.Bartenders.dashboard-section div.bartenders-container dannie.Dannie svg#astronaut.pourBeer g#astronaut-left-palm`, 5, { rotate: "0deg" }, { rotate: "180deg" });
  let beersRemaining = 0;
  queue.map((order) => {
    //go through order array each beer
    order.order.map(() => {
      beersRemaining++;
    });
  });
  console.log(beersRemaining);
  const timeRemaining = Math.ceil((beersRemaining * 10) / 60);

  return (
    <div className="Dashboard">
      <header>
        {/* <img src={Logo} alt="" /> */}
        <img src={FoobarLogo} alt="logo image" className="foobar" width="200" />
        {/* <h1 className="foobar">Foobar</h1> */}
        <h2 className="waitingTime">Waiting time {timeRemaining} min...</h2>
      </header>
      <div className="container-infoSections">
        <BeerKegs availableBeers={beers} onStorage={storage} />
        <Bartenders bartenders={bartenders} />
        <Serving serving={serving} />
        <Queue queue={queue} />
      </div>
    </div>
  );
}
