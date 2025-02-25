import { Board } from "./Board.jsx";
import { useState } from "react";
import { Button } from "./Button.jsx";

const random = n => Math.ceil(Math.random() * n)

function App() {
  // const [myNum, setMyNum] = useState(1)
  const [myGameHistory, setMyGameHistory] = useState([])

  // const [yourNum, setYourNum] = useState(1)
  const [yourGameHistory, setYourGameHistory] = useState([])

  const handleClick = () => {
    const nextMyNum = random(6)
    // setMyNum(nextMyNum)
    setMyGameHistory([...myGameHistory, nextMyNum])

    const nextYourNum = random(6)
    // setYourNum(nextYourNum)
    setYourGameHistory([...yourGameHistory, nextYourNum])
  }

  const handleReset = () => {
    // setMyNum(1)
    setMyGameHistory([])

    // setYourNum(1)
    setYourGameHistory([])
  }

  return (
    <>
      <Board color='blue'
        num={myGameHistory.at(-1) ?? 1}
        gameHistory={myGameHistory} />
      <Board color='red'
        num={yourGameHistory.at(-1) ?? 1}
        gameHistory={yourGameHistory} />

      <Button onClick={handleClick}>던지기</Button>
      <Button onClick={handleReset}>처음부터</Button>
    </>
  );
}

export default App;

// Q. 각 게임판의 주사위가 다르게 -> 플레이어 소유권 나누는 로직 어떻게? -> my

// Q. 마이넘, 유어넘 스테이트를 제거하고도 동일하게 동작하도록 -> let