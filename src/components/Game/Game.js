import React from 'react';
import Guess from '../Guess';
import GuessInput from '../GuessInput';

import { sample } from '../../utils';
import { WORDS } from '../../data';

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
      {guessList.map((text, index) => <Guess guessString={text} key={index} />)}
    </div>

    <GuessInput handleGuess={handleGuess}
                guessList={guessList}
                setGuessList={setGuessList}/>
    </>;
}

export default Game;
