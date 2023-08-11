import React from 'react'
import LangContext from '../contexts/LangContext';

const Title = () => {
  return (
    // Consumer를 쓰거나 useContext를 사용한다 Message.jsx 참고
    <LangContext.Consumer>
      {/* lang 에는 en만 들어있다 */}
      {(lang) => {
        const text = lang === 'en' ? 'Context' : '컨텍스트';
        return <h1>{text}</h1>
      }}
    </LangContext.Consumer >
  )
}

export default Title