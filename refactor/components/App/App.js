import React from "react";
import GameContext from "../../GameContext";
import OptionsPanel from "../OptionsPanel";
import Board from "../Board";
import { createTiles, indexOfSelected } from "../../misc/utils";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    };
  }

  startGame = () => {
    this.setState({
      playing: true,
      previousTileIndex: null,
      tiles: createTiles(this.state.numTiles, this.handleTileClicked),
      toBeCleared: null,
    });
  };

  handleTileClicked = (id, color) => {
    this.setState((state) => {
      const tiles = state.tiles;

      // Find the selected tile
      let selectedTileIndex = indexOfSelected(tiles, id, color);
      let previousTileIndex = state.previousTileIndex;
      let toBeCleared = state.toBeCleared;

      // Clearing mismatched tiles
      if (toBeCleared != null) {
        tiles[toBeCleared[0]].selected = false;
        tiles[toBeCleared[1]].selected = false;
        toBeCleared = null;
      }

      tiles[selectedTileIndex].selected = true;

      if (previousTileIndex !== null) {
        let previousTile = tiles[previousTileIndex];
        let selectedTile = tiles[selectedTileIndex];

        // Handling a matched tile
        if (
          previousTile.id != selectedTile.id &&
          previousTile.color == selectedTile.color
        ) {
          selectedTile.matched = true;
          previousTile.matched = true;
        } else {
          // Handling a mismatched tile
          toBeCleared = [previousTileIndex, selectedTileIndex];
        }

        previousTileIndex = null;
      } else {
        previousTileIndex = selectedTileIndex;
      }

      return {
        tiles,
        toBeCleared,
        previousTileIndex,
      };
    });
  };

  handleNumTileChange = (num) => {
    this.setState({ numTiles: num, playing: false, tiles: [] });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <GameContext.Provider value={this.state}>
          <OptionsPanel
            playing={this.state.playing}
            numTiles={this.state.numTiles}
            startGame={this.startGame}
            handleNumTileChange={this.handleNumTileChange}
          />
          <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
        </GameContext.Provider>
      </div>
    );
  }
}

export default App;
