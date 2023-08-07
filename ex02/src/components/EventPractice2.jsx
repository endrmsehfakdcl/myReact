import React, { useState } from 'react'

const EventPractice2 = () => {
  // useState 훅을 사용하여 inputs 상태를 선언하고 초기 값으로 { username: '', message: '' }
  const [inputs, setInputs] = useState({
    username: '', message: ''
  });

  // inputs 객체의 속성 username과 message를 각각 변수 username과 message로 추출
  const { username, message } = inputs;

  // 입력 필드의 값이 변경될 때 호출되는 onChange 함수
  const onChange = (e) => {
    // 입력 필드의 value와 name 속성을 사용하여 inputs 상태를 업데이트
    const { value, name } = e.target;
    // 계산된 속성 이름을 사용하여 해당 속성을 새 값으로 업데이트
    setInputs({
      ...inputs, [name]: value
    });
  };

  // 버튼을 클릭할 때 호출되는 onClick 함수
  const onClick = (e) => {
    alert(username + " : " + message);
    setInputs({ username: '', message: '' });
  }

  return (
    <div>
      <h1>이벤트 연습2</h1>
      <input
        type="text"
        name='username'
        value={username}
        placeholder='사용자명'
        onChange={onChange} />

      <input
        type="text"
        name="message"
        value={message}
        placeholder='아무거나 입력하세요'
        onChange={onChange} />

      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default EventPractice2