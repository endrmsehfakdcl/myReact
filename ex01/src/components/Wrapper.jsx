import React from 'react'

const Wrapper = ({ children }) => { //프로퍼티로 칠드런을 받음
  const style = {
    border: '2px solid black',
    padding: '16px'
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper