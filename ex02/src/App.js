import { useRef, useState } from 'react';
import EventHandling from './components/EventHandling';
import EventPractice from './components/EventPractice';
import EventPractice2 from './components/EventPractice2';
import InputSample from './components/InputSample';
import InputSample2 from './components/InputSample2';
import ValidationSample from './components/ValidationSample';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import RefLocal from './components/RefLocal';
import RefLocal2 from './components/RefLocal2';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4); // DOM 요소 

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user]); // 전개 연산자 사용해서 state 전달

    setInputs({
      username: '',
      email: ''
    })

    nextId.current += 1
  }

  // e를 가져와서 name하고 value를 inputs
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  // 삭제 버튼 눌렀을 때
  const onRemove = id => {
    //filter 를 쓰면 한줄로 줄어든다
    setUsers(users.filter(user => user.id !== id));

    // const newUsers = [];
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].id !== id) {
    //     newUsers.push(users[i]);
    //   }
    // }
    // setUsers(newUsers);
  }

  // 클릭하면 색이 변하는 부분
  const onToggle = id => {
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user)
    )
  }


  return (
    <div className="App">
      <h1>이메일 CRUD</h1>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle} />

      <hr />
      <RefLocal></RefLocal>
      <hr />
      <RefLocal2></RefLocal2>
      
{/* 
      <InputSample />
      <hr />
      <EventHandling></EventHandling>
      <hr />
      <EventPractice></EventPractice>
      <hr />
      <EventPractice2></EventPractice2>
      <hr />
      <InputSample2></InputSample2>
      <hr />
      <ValidationSample></ValidationSample>
      <hr /> 
*/}


    </div>
  );
}

export default App;
