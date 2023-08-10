import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { UserContext } from '../contexts/UserContext';

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);
  return (
    <div
      className='content'
      style={{
        background: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
      }}>
      <p>{user}님, 좋은 하루되세요</p>
    </div>
  )
}

export default Content