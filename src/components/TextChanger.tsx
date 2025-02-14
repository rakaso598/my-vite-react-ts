import React, { useState } from 'react';

const TextChanger: React.FC = () => {
    // 상태 사용 및 업데이트
    const [text, setText] = useState(''); // 초기값 상태 ''

    const changeText = () => {
        if (text === '') {
            setText('첫번째!');
        } else if (text === '첫번째!') {
            setText('두번째!');
        } else {
            setText('세번째! 끝!');
        }
    };

    // 요소
    return (
        <>
            <p>{text}</p>
            <button onClick={changeText}>세번만 나와요!</button>
        </>
    );
}



export default TextChanger;