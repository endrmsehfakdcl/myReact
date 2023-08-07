import React, { useMemo, useState } from 'react'

const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('평균값');
  return sum / numbers.length;
}
const Average = () => {
  const [list, setList] = useState([10, 20, 30]);
  const [number, setNumber] = useState('');

  const onInsert = () => {
    setList(list.concat(parseInt(number)));
    setNumber('');
  }

  // const average = getAverage(list);
  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) =>
          <li key={index}>{value}</li>)}
      </ul>
      <h2>평균값 : {average}</h2>
    </div>
  )
}

export default Average