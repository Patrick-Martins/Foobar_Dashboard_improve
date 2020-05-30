import React from "react";
// import Jonas from "./Jonas";
// import Peter from "./Peter";
// import Dannie from "./Dannie";
import { ReactComponent as Astronaut } from "../images/svgs/astronaut.svg";

export default function Bartenders(props) {
  const bartenders = props.bartenders.map((bartender) => {
    const bartenderStatus = bartender.statusDetail;
    return (
      //each astronaut SVG will have a class that corresponds to the statusDetail value
      <div className={bartender.name}>
        <Astronaut class={bartenderStatus} />
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
