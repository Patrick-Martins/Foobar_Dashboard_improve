import React from "react";
import Jonas from "../images/bartenders/jonas.png";
import Peter from "../images/bartenders/peter.png";
import Dannie from "../images/bartenders/dannie.png";
import { ReactComponent as Astronaut } from "../images/svgs/astronaut.svg";

export default function Bartenders(props) {
  const bartenders = props.bartenders.map((bartender) => {
    const bartenderStatus = bartender.statusDetail;
    return (
      //each astronaut SVG will have a class that corresponds to the statusDetail value
      <div className="astronaut-container">
        <Astronaut class={bartenderStatus} />
        {bartender.name === "Jonas" && <img src={Jonas} />}
        {bartender.name === "Peter" && <img src={Peter} />}
        {bartender.name === "Dannie" && <img src={Dannie} />}
        <p>{bartenderStatus}</p>
      </div>
    );
  });
  return (
    <section className="Bartenders dashboard-section">
      <h2 className="section-header">Our bartenders</h2>
      <div className="bartenders-container">
        {/* <Jonas />
        <Peter />
        <Dannie /> */}
        {bartenders}
      </div>
    </section>
  );
}
