import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoTemplate.css'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // 비구조 할당
  const { id, text, checked } = todo;

  return (
    <div className='TodoListItem'>
      <div
        className={checked ? 'checkbox_checked' : 'checkbox'}
        onClick={() => onToggle(id)}
      >
        {checked ? < MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem