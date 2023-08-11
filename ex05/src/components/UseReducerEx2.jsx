import React, { useReducer, useState } from 'react'
import Student from './Student';

const reducer = (state, action) => {
  console.log('reducer 실행...', state, action);
  switch (action.type) {
    case 'add':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'delete':
      return {
        count: state.count - 1,
        students: state.students.filter(s => s.id !== action.payload.id)
      }
    case 'check':
      const newStudents = state.students.map((s) => {
        if (s.id === action.payload.id) {
          return { ...s, isHere: !s.isHere };
        }
        else {
          return s;
        }
      })
      return {
        count: state.count,
        students: newStudents
      }
    default:
      return state;
  }
}

const initState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: '길동',
      isHere: false
    }
  ]
}

const UseReducerEx2 = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>출석부</h1>
      <p>총학생수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder='이름을 입력하세요'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: 'add', payload: { name } })}>추가</button>
      <hr />
      {studentsInfo.students.map((s) =>
        <Student
          key={s.id}
          student={s}
          dispatch={dispatch} />)
      }
    </div>
  )
}

export default UseReducerEx2