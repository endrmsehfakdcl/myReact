import { useCallback, useReducer, useRef, useState } from 'react';
import UseReducerEx1 from './components/UseReducerEx1';
import UseReducerEx2 from './components/UseReducerEx2';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

function App() {
  const [number, setNumber] = useState(1);

  function countReducer(oldCount, action) {
    switch (action.type) {
      case 'UP':
        return oldCount + action.number;
      case 'DOWN':
        return oldCount - action.number;
      default:
        return false;
    }
  }


  // useReducer는 매개변수를 2개 받음
  const [count, countDispatch] = useReducer(countReducer, 0);

  function down() {
    countDispatch({ type: 'DOWN', number: number });
  }

  function reset() {
    countDispatch({ type: 'RESET', number: number });
  }

  function up() {
    countDispatch({ type: 'UP', number: number });
  }

  function changeNumber(e) {
    setNumber(Number(e.target.value));
  }

  /////////////////////////////////////////////////////////////////////////////////////////////

  const [todos, setTodos] = useState('');
  const [todoReducer, dispatch] = useReducer(reducer, initState);
  const initState = ([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기',
      checked: true
    }
  ]);
  const nextId = useRef(4);

  const reducer = (state, action) => {
    switch(action.type) {
      case 'onInsert' :
        return 
    }
  }
//
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text, // text: text 인 경우 생략 가능
      checked: false
    }
    setTodos([...todos, todo]); // concat과 동일함, 배열이므로 [] 없으면 타입에러
    nextId.current += 1;
  }, [todos]); // todos가 변하면 Callback함수 리턴

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos]);

  const onToggle = useCallback(id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }, [todos]);


  return (
    <div >
      {/* <h1>useReducer</h1>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>

      <hr />
      <UseReducerEx1></UseReducerEx1>
      <hr />
      <UseReducerEx2></UseReducerEx2>
      <hr /> */}

      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
