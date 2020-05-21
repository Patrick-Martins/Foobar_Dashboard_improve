import React from "react";
import "./App.css";
import Logo from "./images/dxc43.png";
import BeerKegs from "./components/BeerKegs";
import Bartenders from "./components/Bartenders";
import Queue from "./components/Queue";
import Serving from "./components/Serving";

export default function App() {
  return (
    <div className="Dashboard">
      <header>
        {/* <img src={Logo} alt="" /> */}
        <h1 className="foobar">Foobar</h1>
        <h2>Wainting time 6 min...</h2>
      </header>
      <div className="container-infoSections">
        <BeerKegs />
        <Bartenders />
        <Serving />
        <Queue />
      </div>
    </div>
  );
}
