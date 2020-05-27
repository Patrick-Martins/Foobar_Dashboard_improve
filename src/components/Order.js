import React from "react";
import { ReactComponent as Planet } from "../images/svgs/planet.svg";

export default function Order(props) {
  return (
    <div className="serving-order">
      <h3 className="serving-text">{props.id}</h3>
      <Planet className="planet" />
    </div>
  );
}
