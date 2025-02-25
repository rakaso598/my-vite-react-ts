import { Dice } from "./Dice.jsx";




export const Board = ({ color, num, gameHistory }) => {

  return (
    <>
      <Dice color={color} num={num} />

      <div>
        {gameHistory.join(',')}
      </div>
    </>
  );
}