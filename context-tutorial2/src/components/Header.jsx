import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
  const { isDark } = useContext(ThemeContext); // isDark = null
  const user = useContext(UserContext); // user = null
  return (
    <div
      className='header'
      style={{
        background: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
      }}>
      <h1>Welcome {user}님</h1>
    </div>
  )
}

export default Header