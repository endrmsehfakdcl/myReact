import React from 'react'
import Employee from './Employee'

const Comp02 = () => {
  const employees = [
    { no: '202301', name: '홍길동', dept: '마케팅' },
    { no: '202302', name: '김길동', dept: '마' },
    { no: '202303', name: '이길동', dept: '마팅' },
    { no: '202304', name: '박길동', dept: '팅' },
    { no: '202305', name: '최길동', dept: '케팅' }
  ];

  return (
    <div>
      <h1>배열 출력</h1>
      {employees.map(emp =>
        <Employee emp={emp} key={emp.no} />
      )}
    </div>
  )
}
export default Comp02