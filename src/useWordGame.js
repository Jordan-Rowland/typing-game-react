import {useState, useEffect, useRef} from "react"

function useWordGame(startingTime) {
  const [wordsInput, setWordsInput] = useState("");
  const [numWords, setnumWords] = useState();
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [gameRunning, setGameRunning] = useState(false);
  const textInputRef = useRef(null);

  function handleChange(e) {
    if (gameRunning) {
      setWordsInput(e.target.value);
    }
  }

  function startGame() {
    setTimeRemaining(startingTime);
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
    if (timeRemaining > 0 && gameRunning) {
      setTimeout(() => {
        setTimeRemaining(prevTimer => prevTimer - 1)
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, gameRunning])

  return {
    textInputRef,
    gameRunning,
    handleChange,
    wordsInput,
    timeRemaining,
    startGame,
    numWords
    }
}

export default useWordGame
