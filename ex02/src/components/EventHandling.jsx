import React, { useState } from 'react'

const EventHandling = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleClick = () => {
    // true면 false로 false면 true로
    setIsToggleOn(!isToggleOn);
  }
  return (
    <div>
      <h1>토글 버튼</h1>
      <button onClick={handleClick}>
        {/* 토글 버튼 */}
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  )
}

export default EventHandling