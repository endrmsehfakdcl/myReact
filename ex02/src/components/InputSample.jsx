import React, { useState } from 'react'

const InputSample = () => {

  const [inputs, setInputs] = useState(
    { name: '', nickname: '' }
  );

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
  }


  return (
    <div>
      <h1>이름과 닉네임</h1>
      <input name='name' onChange={onChange} value={name} placeholder='이름' />
      <input name='nickname' onChange={onChange} value={nickname} placeholder='닉네임' />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample