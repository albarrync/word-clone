import React from "react";
import Guess from "../Guess";
import GuessInput from "../GuessInput";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleGuess(guess) {
    const nextGuessList = [...guessList];
    nextGuessList.push(guess);
    setGuessList(nextGuessList);
  }

  function resolveGameState() {
    if (guessList.at(-1) === answer) {
      return (
        <div className="happy banner">
          <p> You won in {guessList.length} guess(es).</p>
        </div>
      );
    } else if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      return (
        <div className="sad banner">
          <p> Sorry! The answer was {answer}. </p>
        </div>
      );
    } else {
      return;
    }
  }

  return (
    <>
      {resolveGameState()}
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((guessRow, index) => {
          return (
            <Guess key={index} guessString={guessList[index]} answer={answer} />
          );
        })}
      </div>

      <GuessInput
        handleGuess={handleGuess}
        answer={answer}
        guessList={guessList}
      />
    </>
  );
}

export default Game;
