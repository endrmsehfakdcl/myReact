import React, { useCallback, useEffect, useRef, useState } from 'react'

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const countRender = useRef(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log('함수가 생성되었습니다.', { number });
    return;
  }, [number]); //deps , number가 바뀌면 함수를 새로 생성

  useEffect(() => {
    countRender.current += 1;
    console.log('함수가 새롭게 생성되었습니다', countRender.current);
  }, [someFunction]); // deps, someFunction

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => setToggle(!toggle)}>
        {toggle.toString()}
      </button>

      <button onClick={someFunction}>
        Call someFunction
      </button>

    </div>
  )
}

export default UseCallbackExample