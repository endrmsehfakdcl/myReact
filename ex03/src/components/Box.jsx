import React, { useEffect, useRef, useState } from 'react'

const Box = ({ boxStyle }) => {

  const [style, setStyle] = useState();
  const countRender = useRef(0);

  useEffect(() => {
    countRender.current += 1;
    console.log('박스사이즈 함수가 생성됨', countRender.current);
    setStyle(boxStyle);
  }, [boxStyle]); // deps, boxStyle이 변할때만 실행

  return (
    <div>
      <div style={style}></div>
    </div>

  )
}

export default Box