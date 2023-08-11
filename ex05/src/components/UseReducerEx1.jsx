import React, { useReducer, useState } from 'react'

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}

const reducer = (state, action) => {
  console.log('reducer가 일을함.', state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.number;
    case ACTION_TYPES.withdraw:
      return state - action.number;
    default:
      return state;
  }
}

const UseReducerEx1 = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  function deposit() {
    dispatch({ type: ACTION_TYPES.deposit, number: number });
  }

  function withdraw() {
    dispatch({ type: ACTION_TYPES.withdraw, number: number });
  }

  return (
    <div>
      <h2>은행에 오신 걸 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        step={3000}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={deposit}>예금</button>
      <button onClick={withdraw}>출금</button>
    </div>
  )
}

export default UseReducerEx1