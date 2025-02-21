import React from "react";

// 함수형 컴포넌트 타입 정의 (React.FC)
const MyButton: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
};

// export default
export default MyButton;
