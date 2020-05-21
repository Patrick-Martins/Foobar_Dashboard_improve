import React from "react";
import Jonas from "./Jonas";
import Peter from "./Peter";
import Dannie from "./Dannie";

export default function Bartenders() {
  return (
    <section className="Bartenders dashboard-section">
      <h2 className="section-header">Our bartenders</h2>
      <div className="bartenders-container">
        <Jonas />
        <Peter />
        <Dannie />
      </div>
    </section>
  );
}
