import React from "react";
import "./TransformerCard.css";

const TransformerCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.shuffle} />
    </div>
  </div>
);

export default TransformerCard;
 
