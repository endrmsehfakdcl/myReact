import { useCallback, useReducer, useRef, useState } from 'react';
import UseReducerEx1 from './components/UseReducerEx1';
import UseReducerEx2 from './components/UseReducerEx2';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          checked: false,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return state;
  }
}


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

  const [todos, dispatch] = useReducer(todoReducer, [
    // 초기 상태는 여기에 설정
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들기",
      checked: true,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = (text) => {
    dispatch({
      type: ADD_TODO,
      id: nextId.current,
      text,
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    dispatch({
      type: REMOVE_TODO,
      id,
    });
  };

  const onToggle = (id) => {
    dispatch({
      type: TOGGLE_TODO,
      id,
    });
  };

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
