import React from "react";
import GridCard from "../Components/GridCard";
import config from "../config/GridConfig";
import "./PinterestGridStyles.css";
function PinterestGridScreen() {
  return (
    <div className="PinterestGridContainer">
      {config.GridCardConfig.map((item) => {
        return <GridCard size={item.size} key={item.id} />;
      })}
    </div>
  );
}

export default PinterestGridScreen;
