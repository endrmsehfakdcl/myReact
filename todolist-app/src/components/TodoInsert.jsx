import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";
import './TodoTemplate.css'

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    onInsert(value); // App.js 에서 받은 onInsert
    setValue(''); // 초기화
    e.preventDefault(); // submit 기본기능 막기
  }, [onInsert, value]);

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input
        type="text"
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit'><MdAdd /></button>
    </form>
  )
}

export default TodoInsert