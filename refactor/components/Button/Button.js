import GameContext from "../../GameContext.js";
import "./Button.css";

const Button = () => (
  <GameContext.Consumer>
    {({ playing, startGame }) => {
      <button onClick={startGame}>{playing ? "reset" : "start"}</button>;
    }}
  </GameContext.Consumer>
);

export default Button;
