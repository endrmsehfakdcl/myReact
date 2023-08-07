import React from 'react'

const Keduit = (props) => {
  const students = [
    { no: '1', name: '김궁서', team: '2' },
    { no: '2', name: '이희태', team: '1' },
    { no: '3', name: '김유진', team: '1' },
    { no: '4', name: '구상모', team: '2' },
    { no: '5', name: '김재훈', team: '1' },
    { no: '6', name: '박기웅', team: '3' },
    { no: '7', name: '안광현', team: '3' },
    { no: '8', name: '임대훈', team: '3' },
    { no: '9', name: '노태종', team: '3' },
    { no: '10', name: '김영란', team: '1' },
    { no: '11', name: '김진', team: '2' },
    { no: '12', name: '박상현', team: '2' },
    { no: '13', name: '이한재', team: '2' }
  ];

  const Student = (props) => {
    const { no, name, team } = props.std;
    return (
      <tr>
        <td>{no}</td>
        <td>{name}</td>
        <td>{team}</td>
      </tr>
    );
  };

  return (
    <div>
      <h1>한정교 505</h1>
      {/* {students.map(std =>
        <Student std={std} key={std.no} />
      )} */}
      <table> 
        <thead>
          <tr>
            <th>학번</th>
            <th>이름</th>
            <th>팀</th>
          </tr>
        </thead>
        <tbody>
          {students.map(std =>
            <Student std={std} key={std.no} />
          )}
        </tbody>
      </table>
    </div>
  )

}
export default Keduit;