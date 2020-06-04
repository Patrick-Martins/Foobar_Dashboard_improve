import React from "react";
import Jonas from "../images/bartenders/jonas.png";
import Peter from "../images/bartenders/peter.png";
import Dannie from "../images/bartenders/dannie.png";
import { ReactComponent as Astronaut } from "../images/svgs/astronaut.svg";

export default function Bartenders(props) {
  const bartenders = props.bartenders.map((bartender, index) => {
    const bartenderStatus = bartender.statusDetail;
    return (
      //each astronaut SVG will have a class that corresponds to the statusDetail value
      <div key={bartender.name + index} className="astronaut-container" id={bartender.name}>
        <Astronaut className={bartenderStatus} />
        {bartender.name === "Jonas" && <img src={Jonas} alt="Jonas image" />}
        {bartender.name === "Peter" && <img src={Peter} alt="Peter image" />}
        {bartender.name === "Dannie" && <img src={Dannie} alt="Dannie image" />}
        <p className="bartenderName">{bartender.name}</p>
      </div>
    );
  });
  return (
    <section className="Bartenders dashboard-section">
      <h2 className="section-header">Our bartenders</h2>
      <div className="bartenders-container">{bartenders}</div>
    </section>
  );
}
