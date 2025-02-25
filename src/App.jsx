import { Dice } from "./Dice.jsx";
import { Button } from "./Button.jsx";
import { useState } from "react";

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
  }

  return (
    <>
      <Dice color="blue" num={num} />
      <Button onClick={handleClick}>던지기</Button>
      <Button onClick={handleReset}>처음부터</Button>
      <div>
        {gameHistory.join(',')}
      </div>
    </>
  );
}

export default App;

// 컴포넌트:
// 반드시 대문자로 시작되어야 한다.
// 항상 jsx (리액트 엘리먼트)가 return되어야 한다.
// 리액트 엘리먼트는 HTML 태그형식이거나 컴포넌트이다.

// 던지기를 누르면 주사위 숫자가 3