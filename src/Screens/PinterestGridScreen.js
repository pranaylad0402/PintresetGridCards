import React from "react";
import GridCard from "../Components/GridCard";
import config from "../config/GridConfig";
function PinterestGridScreen() {
  return (
    <div style={styles.mainContainer}>
      {config.GridCardConfig.map((item) => {
        return <GridCard size={item.size} key={item.id} />;
      })}
    </div>
  );
}

const styles = {
  mainContainer: {
    margin: 0,
    padding: 40,
    width: "80vw",
    position: "absolute",
    left: "50%",
    transform: "translateX(-46%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,260px)",
    gridAutoRows: "16px",
  },
};

export default PinterestGridScreen;
