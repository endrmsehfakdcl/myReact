import React, { useState } from 'react'

const EventPractice = () => {
  // 초기값 useState('') 비어있음
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onKeyDown = (e) => {
    if (e.key === 'Enter') onClick();
  }
  const onClick = () => {
    alert(username + " : " + message);
    // alert 이후 clear
    setUsername('');
    setMessage('');
  }
  return (
    <div>
      <h1>[이벤트 연습]</h1>
      {/* 4개의 이벤트가 핸들링 되었다 */}
      <input type="text" name='username' value={username}
        placeholder='사용자명'
        onChange={onChangeUsername} />

      <input type="text" name="message" value={message}
        placeholder='아무거나 입력하세요'
        onChange={onChangeMessage} onKeyDown={onKeyDown} />

      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default EventPractice