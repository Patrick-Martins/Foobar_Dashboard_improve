import React from "react";
import alienHead from "../images/svgs/head.svg";

export default function Serving() {
  return (
    <section className="Serving dashboard-section">
      <h2 className="section-header">Currently serving</h2>
      <div className="serving-container">
        <img src={alienHead} />
      </div>
    </section>
  );
}
