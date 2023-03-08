import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessString, answer }) {
  function rowBuilder(input) {
    if (!!input) {
      return checkGuess(input, answer).map((letter, index) => (
        <span className={`cell ${letter.status}`} key={index}>
          {letter.letter}
        </span>
      ));
    } else {
      return range(0, 5).map((empty, index) => (
        <span className="cell" key={index}>
          {undefined}
        </span>
      ));
    }
  }

  return <p className="guess">{rowBuilder(guessString)}</p>;
}

export default Guess;
