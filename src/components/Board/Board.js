import React from "react";
import "./Board.css";
import Tile from "../Tile";

const Board = (props) => {
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  };

  const tilesArray = props.tiles.map((tile) => <Tile {...tile} />);

  return (
    <div className="Board" style={gridConfig}>
      {tilesArray}
    </div>
  );
};

export default Board;
