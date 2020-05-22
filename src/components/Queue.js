import React from "react";
import alienSign from "../images/svgs/alien.svg";

export default function Queue() {
  return (
    <section className="Queue dashboard-section">
      <h2 className="section-header">Orders in queue</h2>
      <div className="queue-container">
        <img src={alienSign} alt="In Queue" />
      </div>
    </section>
  );
}
