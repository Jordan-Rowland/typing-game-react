import React, { useState, useEffect, useRef } from "react"

function App() {
const STARTING_TIME = 4

  const [wordsInput, setWordsInput] = useState("");
  const [numWords, setnumWords] = useState();
  const [timerRemaining, setTimerRemaining] = useState(STARTING_TIME);
  const [gameRunning, setGameRunning] = useState(false);
  const textInputRef = useRef(null);

  function handleChange(e) {
    if (gameRunning) {
      setWordsInput(e.target.value);
    }
  }

  function startGame() {
    setTimerRemaining(STARTING_TIME);
    setGameRunning(true);
    setWordsInput("");
    setnumWords(0);
    console.log(textInputRef)
    textInputRef.current.disabled = false;
    textInputRef.current.focus();
  }

  function endGame() {
    setGameRunning(false);
    const wordSplitList = wordsInput.trim().split(" ");
    const cleanWordList = wordSplitList.filter(word => word !== "");
    setnumWords(cleanWordList.length);
  }


  useEffect(() => {
    if (timerRemaining > 0 && gameRunning) {
      setTimeout(() => {
        setTimerRemaining(prevTimer => prevTimer - 1)
      }, 1000);
    } else if (timerRemaining === 0) {
      endGame();
    }
  }, [timerRemaining, gameRunning])

  console.log(gameRunning);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textInputRef}
        disabled={!gameRunning}
        onChange={handleChange}
        value={wordsInput}
      />
      <h4>Time reminaing: {timerRemaining}</h4>
      <button disabled={gameRunning} onClick={startGame}>Start</button>
      <h1>Word count: {numWords}</h1>
    </div>
  )
}

export default App
