import React from "react";
import AlienSign from "./AlienSign";

export default function Queue(props) {
  return (
    <section className="Queue dashboard-section">
      <h2 className="section-header">Orders in queue</h2>
      <div className="queue-container">
        <AlienSign queue={props.queue.length} className="alien-orders" />
      </div>
    </section>
  );
}
