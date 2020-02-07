import React, { useState, useEffect, useRef } from "react"
import useWordGame from "./useWordGame"


function App() {

  const {
    textInputRef,
    gameRunning,
    handleChange,
    wordsInput,
    timeRemaining,
    startGame,
    numWords
  } = useWordGame(15)

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textInputRef}
        disabled={!gameRunning}
        onChange={handleChange}
        value={wordsInput}
      />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button disabled={gameRunning} onClick={startGame}>Start</button>
      <h1>Word count: {numWords}</h1>
    </div>
  )
}

export default App
