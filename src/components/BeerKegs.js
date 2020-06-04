import React from "react";
import Beer from "./Beer";

export default function BeerKegs(props) {
  const beers = props.availableBeers.map((beerTap, index) => <Beer key={beerTap.beer + index} name={beerTap.beer} level={beerTap.level} storage={props.onStorage} />);
  return (
    <section className="beerKegs dashboard-section">
      <h2 className="section-header">On the tap</h2>
      <div className="beers-container">{beers}</div>
    </section>
  );
}
