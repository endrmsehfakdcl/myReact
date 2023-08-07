import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './ValidationSample.css'

const ValidationSample = () => {

  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(false);
  const [clicked, setClicked] = useState(false);
  const inputValid = useRef(null);

  const onClick = () => {
    setClicked(true);
    setValidate(password === '0000');
    inputValid.current.focus();
  }

  const onChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h1>유효성 검사</h1>
      <input
        type="password"
        value={password}
        onChange={onChange}
        className={clicked ? (validate ? 'success' : 'failure') : ''}
        ref={inputValid}
      />

      <button onClick={onClick}>검증하기</button>
    </div>
  )
}

export default ValidationSample