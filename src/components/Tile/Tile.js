import React from "react";

import "./Tile.css";

const Tile = (props) => {
  const isSelectedOrMatched = props.selected === true || props.matched === true;

  const dynamicColor = isSelectedOrMatched
    ? { backgroundColor: props.color }
    : null;

  return (
    <div
      className="Tile"
      style={dynamicColor}
      onClick={() => {
        props.handleTileClicked(props.id, props.color);
      }}
    >
      {isSelectedOrMatched && <props.svg />}
    </div>
  );
};

export default Tile;
