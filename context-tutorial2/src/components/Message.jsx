import React, { useContext } from 'react'
import LangContext from '../contexts/LangContext'

const Message = () => {
  // title.jsx 와 비교해서 볼 것
  const lang = useContext(LangContext);
  const message = lang === 'en' ? // 삼항연산식
    <p>{lang} : Context provides a way to ...</p> :
    <p>{lang} : 컨텍스트는 ...... 제공합니다.</p>
  return (
    <div>{message}</div>
  )
}

export default Message