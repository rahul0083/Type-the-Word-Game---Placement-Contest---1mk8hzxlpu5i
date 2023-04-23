import React, { useState, useEffect } from 'react';
import "../styles/App.css"

const WORD_LIST = ['apple', 'banana', 'cherry', 'grape', 'orange'];

function App() {
  const [word, setWord] = useState('');
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const timer=setTimeout(()=>{

      setFlashWord(false);
    },500);

    return()=>clearTimeout(timer);
  },[flashWord])

  const handleInputChange=(event)=>{
    setUserInput(event.target.value);
  }

  const handleFormSubmit=(event)=>{

    event.preventDefault();
    if(userInput.toLowerCase()===WORD_LIST[index]){
      setResult("You Won!");
    }
    else{
      setResult("You Lost!");
    }
  }
  const handleRestartClick=()=>{
     setIndex(index+1);
     setFlashWord(true);
     setResult("");
     setUserInput("");
    setTimeout(()=>{
      setFlashWord(false)
    },500)

  }

  return (
    <div className="mini-game-container">
      <h2 className="mini-game-title">Mini Game</h2>
    {flashWord &&  <p className="mini-game-word">{WORD_LIST[index]}</p>}
      <form className="mini-game-form" onSubmit={handleFormSubmit}>
        <input className="mini-game-input" type="text" value={userInput} onChange={handleInputChange} />
        <button className="mini-game-button" type="submit">Check Answer</button>
      </form>
      {result && (
        <>
          <p className="mini-game-result">{result}</p>
          <button className="mini-game-restart-button" onClick={handleRestartClick}>Restart</button>
        </>
      )}
    </div>
  );
}

export default App;
