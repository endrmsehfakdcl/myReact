import React, { useContext } from 'react'
import LangContext from '../contexts/LangContext'

const Button = ({ onToggleLang }) => {
  const lang = useContext(LangContext);
  return (
    <button onClick={onToggleLang}>{lang}</button>
  )
}

export default Button