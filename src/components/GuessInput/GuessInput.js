import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ handleGuess, answer, guessList }) {
  const [input, setInput] = React.useState("");

  function submitGuess() {
    if (input.length === 5) {
      handleGuess(input);
    } else {
      window.alert("Invalid Guess. Must be 5 Characters");
    }
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        submitGuess();
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter Guess - 5 Letters</label>
      <input
        type="text"
        id="guess-input"
        pattern="[A-Z]{5}"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        disabled={
          guessList.at(-1) === answer ||
          guessList.length >= NUM_OF_GUESSES_ALLOWED
        }
      ></input>
    </form>
  );
}

export default GuessInput;
