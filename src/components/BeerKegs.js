import React from "react";
import Beer from "./Beer";

export default function BeerKegs(props) {
  const beers = props.availableBeers.map((beerTap) => <Beer name={beerTap.beer} />);
  return (
    <section className="beerKegs dashboard-section">
      <h2 className="section-header">On the tap</h2>
      <div className="beers-container">{beers}</div>
    </section>
  );
}
