import React, { useState } from 'react'
import { useRef } from 'react';

const InputSample2 = () => {

  const [inputs, setInputs] = useState(
    { name: '', nickname: '' }
  );
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setInputs({
      ...inputs, [name]: value // input name
    });
  };

  const onReset = (e) => {
    setInputs({
      name: '', nickname: ''
    });
    // 커서 위치
    nameInput.current.focus();
  }


  return (
    <div>
      <h1>이름과 닉네임2 ref</h1>
      <input
        name='name'
        onChange={onChange}
        value={name}
        placeholder='이름'
        ref={nameInput} />
      <input
        name='nickname'
        onChange={onChange}
        value={nickname}
        placeholder='닉네임' />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample2