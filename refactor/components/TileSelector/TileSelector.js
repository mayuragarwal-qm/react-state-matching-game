import React from "react";
import "./TileSelector.css";
import useHover from "../../hooks";
import GameContext from "../../GameContext.js";

const TileSelector = () => {
  const [ref, hovered] = useHover();

  return (
    <GameContext.Consumer>
      {({ numTiles, handleNumTileChange }) => {
        const dropdown = (
          <div className="tileSelectorContent">
            <div className="number" onClick={() => handleNumTileChange(4)}>
              4
            </div>
            <div className="number" onClick={() => handleNumTileChange(16)}>
              16
            </div>
            <div className="number" onClick={() => handleNumTileChange(36)}>
              36
            </div>
          </div>
        );

        return (
          <div className="tileSelector">
            <div>Number of Tiles</div>
            <div className="tileSelectorDropdown" ref={ref}>
              {numTiles} {hovered ? dropdown : null}
            </div>
          </div>
        );
      }}
    </GameContext.Consumer>
  );
};

export default TileSelector;
