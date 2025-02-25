import { Board } from "./Board.jsx";
import { useState } from "react";
import { Button } from "./Button.jsx";

const random = n => Math.ceil(Math.random() * n)

function App() {

  const [num, setNum] = useState(1)
  const [gameHistory, setGameHistory] = useState([])
  const handleClick = () => {
    const nextNum = random(6)
    setNum(nextNum)
    setGameHistory([...gameHistory, nextNum])
  }

  const handleReset = () => {
    setNum(1)
    setGameHistory([])
  }

  return (
    <>
      <Board color='blue' num={num} gameHistory={gameHistory} />
      <Board color='red' num={num} gameHistory={gameHistory} />

      <Button onClick={handleClick}>던지기</Button>
      <Button onClick={handleReset}>처음부터</Button>
    </>
  );
}

export default App;