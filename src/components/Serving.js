import React from "react";
import Order from "./Order";
import { ReactComponent as AlienHead } from "../images/svgs/head.svg";

export default function Serving(props) {
  const ordersServing = props.serving.map((order, index) => <Order key={"order-" + index} id={order.id} />);
  return (
    <section className="Serving dashboard-section">
      <h2 className="section-header">Currently serving</h2>
      <div className="serving-container">
        <AlienHead className="alien-head" />
        <div className="servingOrders-container">{ordersServing}</div>
      </div>
    </section>
  );
}
