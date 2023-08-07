import React, { useMemo, useState } from 'react'

const hardCalculator = (number) => {
  let now = Date.now();
  let start = now;

  // 2초 동안 반복
  while (now < start + 2000) {
    now = Date.now();
  }

  console.log('어려운 계산기');
  return number + 1000;
}

const easyCalculator = (number) => {
  console.log('쉬운 계산기');
  return number + 1;
}

const UseMemoExample = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  // const easySum = easyCalculator(easyNumber);
  // const hardSum = hardCalculator(hardNumber);
  const easySum = useMemo(() => easyCalculator(easyNumber), [easyNumber]);
  const hardSum = useMemo(() => hardCalculator(hardNumber), [hardNumber]);
  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 1000 = {hardSum} </span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  )
}

export default UseMemoExample