import React from 'react'

const Student = ({ student, dispatch }) => {
  const { id, name, isHere } = student;
  return (
    <div>
      <span
        style={{
          textDecoration: isHere && 'line-through'
        }}
        onClick={() =>
          dispatch({ type: 'check', payload: { id } })}>{name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: 'delete', payload: { id } })
        }}>삭제
      </button>
    </div>
  )
}

export default Student