import React, { useCallback, useState } from 'react'
import Box from './Box';

const BoxSize = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const boxStyle = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
      marginTop: '5px'
    }
  }, [size]);

  return (
    <div style={{ background: isDark ? 'black' : 'white' }}>
      <input
        type="number"
        value={size}
        step={100}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>배경색 변경</button>
      <Box boxStyle={boxStyle}></Box>
    </div >
  )
}


export default BoxSize