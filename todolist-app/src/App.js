import { useCallback, useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
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

  /************************************/
  /************ 추가 기능 *************/
  /************************************/
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text, // text: text 인 경우 생략 가능
      checked: false
    }
    setTodos([...todos, todo]); // concat과 동일함, 배열이므로 [] 없으면 타입에러
    nextId.current += 1;
  }, [todos]); // todos가 변하면 Callback함수 리턴


  /************************************/
  /************ 삭제 기능 *************/
  /************************************/
  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos]);


  /************************************/
  /************ 토글 기능 *************/
  /************************************/
  const onToggle = useCallback(id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }, [todos]);


  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
