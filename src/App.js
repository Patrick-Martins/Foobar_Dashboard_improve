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
import { _createElement } from "gsap/CSSPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function App() {
  //STATE----
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

  // fetching.getData();

  //GSAP

  gsap.registerPlugin(MotionPathPlugin);
  gsap.to(["#star1", "#star2", "#star3", "#beer1", "#beer2", "#beer3"], {
    duration: 5,
    repeat: -1,
    repeatDelay: 0,
    ease: "none",
    motionPath: {
      start: 0.16,
      end: 1.16,
      path: "#alien-circle",
      align: "#alien-circle",
      alignOrigin: [0.5, 0.5],
    },
  });
  gsap.to("#star1", {
    duration: 5,
    repeat: -1,
    repeatDelay: 0,
    ease: "none",
    motionPath: {
      start: 0.16,
      end: 1.16,
      path: "#alien-circle",
      align: "#alien-circle",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  });
  gsap.to("#beer1", {
    duration: 5,
    repeat: -1,
    repeatDelay: 0,
    ease: "none",
    motionPath: {
      start: 0.32,
      end: 1.32,
      path: "#alien-circle",
      align: "#alien-circle",
      alignOrigin: [0.5, 0.5],
    },
  });
  gsap.to("#star2", {
    duration: 5,
    repeat: -1,
    repeatDelay: 0,
    ease: "none",
    motionPath: {
      start: 0.48,
      end: 1.48,
      path: "#alien-circle",
      align: "#alien-circle",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  });
  gsap.to("#beer2", {
    duration: 5,
    repeat: -1,
    repeatDelay: 0,
    ease: "none",
    motionPath: {
      start: 0.64,
      end: 1.64,
      path: "#alien-circle",
      align: "#alien-circle",
      alignOrigin: [0.5, 0.5],
    },
  });
  gsap.to("#star3", {
    duration: 5,
    repeat: -1,
    repeatDelay: 0,
    ease: "none",
    motionPath: {
      start: 0.8,
      end: 1.8,
      path: "#alien-circle",
      align: "#alien-circle",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
    },
  });
  gsap.to("#beer3", {
    duration: 5,
    repeat: -1,
    repeatDelay: 0,
    ease: "none",
    motionPath: {
      start: 0.96,
      end: 1.96,
      path: "#alien-circle",
      align: "#alien-circle",
      alignOrigin: [0.5, 0.5],
    },
  });

  //CALCULATE TIME REMAINING
  let beersRemaining = 0;
  //go through each beer in all the queue
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
        <img src={FoobarLogo} alt="logo image" className="foobar" width="200" />
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
