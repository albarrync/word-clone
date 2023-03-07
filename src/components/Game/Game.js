import React from 'react';
import Guess from '../Guess';
import GuessInput from '../GuessInput';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);


  function handleGuess(guess) {
    const nextGuessList = [...guessList];
    nextGuessList.push(guess);
    setGuessList(nextGuessList);
  }

  return <>

    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((guessRow, index) => {
        return (<Guess key={index} guessString={ guessList[index] } /> )
      })}
    </div>

    <GuessInput handleGuess={handleGuess}
                guessList={guessList}
                setGuessList={setGuessList}/>
    </>;
}

export default Game;
