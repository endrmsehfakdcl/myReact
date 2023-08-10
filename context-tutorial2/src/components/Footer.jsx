import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { ColorContext2 } from '../contexts/ColorContext2';

const Footer = () => {
  // 비구조화 할당
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { background, color } = useContext(ColorContext2);

  return (
    <div
      className='footer'
      style={{
        background: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
      }}>
      <button
        style={{
          // Provider 없이 Context 사용 가능
          background: background,
          color: color
        }}
        className='button'
        onClick={() => setIsDark(!isDark)}>
        Dark Mode
      </button>
    </div>
  )
}

export default Footer