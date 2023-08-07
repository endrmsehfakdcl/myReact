import React, { useRef, useState } from 'react'

const RefLocal2 = () => {
  const [render, setRender] = useState(0);
  // useRef인 countRef
  const countRef = useRef(0);
  // 지역변수인 countVar 함수가 호출될 때마다 0으로 초기화
  let countVar = 0;

  const onRendering = () => {
    // 값이 state에 반영될 때마다 렌더링
    setRender(render + 1);
  }

  const onIncreaseRef = () => {
    countRef.current += 1;
  }

  const onIncreaseVar = () => {
    //set을 안해서 화면에 안나옴
    countVar += 1;
  }

  const onPrintResult = () => {
    console.log(`ref: ${countRef.current}, Var: ${countVar}`);
  }

  return (
    <div>
      <h1>RefLocal2</h1>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={onRendering}>렌더링</button>
      <button onClick={onIncreaseRef}>Ref증가</button>
      <button onClick={onIncreaseVar}>Var증가</button>
      <button onClick={onPrintResult}>Ref Var 값 출력</button>
    </div>
  )
}

export default RefLocal2