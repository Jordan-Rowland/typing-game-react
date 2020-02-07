import React, { useState, useEffect } from "react"

function App() {
  const [wordsInput, setWordsInput] = useState("");
  const [numWords, setnumWords] = useState();
  const [timer, setTimer] = useState(3);

  function handleChange(e) {
    setWordsInput(e.target.value)
    const wordSplitList = wordsInput.trim().split(" ")
    const cleanWordList = wordSplitList.filter(word => word !== "")
    setnumWords(cleanWordList.length)
  }

  useEffect(() => {
    if (timer > 0) {
      const timeoutId = setTimeout(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
    }
  }, [timer])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={wordsInput}/>
      <h4>Time reminaing: {timer}</h4>
      <button>Start</button>
      <h1>Word count: {numWords}</h1>
    </div>
  )
}

export default App
