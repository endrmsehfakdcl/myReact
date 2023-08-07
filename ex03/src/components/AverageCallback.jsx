import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log('평균값');
  return sum / numbers.length;
}

const AverageCallback = () => {
  const [list, setList] = useState([10, 20, 30]);
  const [number, setNumber] = useState('');
  const countRender = useRef(0);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(number)));
    setNumber('');
  }, [number, list]);

  useEffect(() => {
    countRender.current += 1;
    console.log('onChange 함수 생성', countRender.current);
  }, [onChange]);

  // useEffect(() => {
  //   countRender.current += 1;
  //   console.log('onInsert 함수 생성', countRender.current);
  // }, [onInsert]);

  // const average = getAverage(list);
  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={onChange}
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

export default AverageCallback