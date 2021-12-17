import React from "react";
import "./GridCardStyles.css";

function GridCard(props) {
  return <div className={`cardContainer ${props.size}`}></div>;
}

export default GridCard;
