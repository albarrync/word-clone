import React from "react";
import { range } from "../../utils";

function Guess({ guessString }) {
  function rowBuilder(input) {
    if (!!input) {
      return input.split("").map((character, index) => (
        <span className="cell" key={index}>
          {character}
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
