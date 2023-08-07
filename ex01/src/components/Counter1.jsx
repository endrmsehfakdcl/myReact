import React, { useState } from 'react'

const Counter1 = () => {
  const [number, setNumber] = useState(0);
  const onPlus = () => {
    setNumber(number + 1);
  }
  const onMinus = () => {
    setNumber(number - 1);
  }
  return (
    <div>
      <h1>Counter1</h1>
      <h1>{number}</h1>

      <button onClick={onPlus}> +1 </button>
      <button onClick={onMinus}> -1 </button>

      <button onClick={
        () => setNumber(number + 1)
      }>+1</button>
      <button onClick={
        () => setNumber(number - 1)
      }>-1</button>
    </div>
  )
}

export default Counter1
// 이벤트를 실행할때 자바스크립트 함수 형태로 넣는다