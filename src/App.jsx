import { Dice } from "./Dice.jsx";

function App() {
  return (
    <>
      <Dice color="red" num={1} />
    </>
  );
}

export default App;

// 컴포넌트:
// 반드시 대문자로 시작되어야 한다.
// 항상 jsx (리액트 엘리먼트)가 return되어야 한다.
// 리액트 엘리먼트는 HTML 태그형식이거나 컴포넌트이다.
