import logo from './logo.svg';
import './App.css';
// 외부 컴포넌트 Student
import Student from './components/Student';
import Comp01 from './components/Comp01';
import Comp02 from './components/Comp02';
import Keduit from './components/Keduit';
import Wrapper from './components/Wrapper';
import Hello from './components/Hello';
import { useState } from 'react';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';

function Header(props) {
  console.log('props', props.title)
  return (
    <div>
      <header>
        <h1>
          <a href="http://www.naver.com" onClick={
            // 콜백 함수
            function (event) {
              // a태그의 이벤트를 무력화하는 preventDefault
              event.preventDefault();
              props.onChangeMode();
            }
          }>{props.title}</a>
        </h1>
      </header>
    </div>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'read' + t.id} onClick={
        event => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }
      }>{t.title}</a></li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={
        event => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }
      }>
        <input type="text" name='title' placeholder='title' />
        <p><textarea name="body" ></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={
        event => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}>
        <input type="text" name='title'
          placeholder='title' value={title}
          onChange={event => {
            console.log(event.target.value);
            setTitle(event.target.value);
          }} />
        <p><textarea name="body" value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}></textarea></p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </article>
  )
}

function App() {
  // setMode는 함수이다
  // useState는 배열을 리턴한다.
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  console.log("mode", mode);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ......' },
    { id: 2, title: 'css', body: 'css is ......' },
    { id: 3, title: 'javascript', body: 'javascript is ......' }
  ]);
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 24,
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  };

  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title='WELCOME' body='Hello, Web!!'></Article>
  }
  else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Article title={title} body={body}></Article>
    // 상세보기 시 업데이트와 딜리트 링크 생성하는 contextControl
    // 리액트는 태그를 다룰 때 하나의 태그 안에 들어가 있어야 하므로 빈 태그 <></>
    contextControl =
      <>
        <li><a href={"/update/" + id} onClick={event => {
          event.preventDefault();
          setMode('UPDATE');
        }}>Update</a></li>

        <li><input type="button" value="Delete" onClick={() => {
          // state에게 알려줘야 하는 newTopics
          const newTopics = [];
          for (let i = 0; i < topics.length; i++) {
            // delete하는 id를 제외하고 다시 newTopics배열에 push
            if (topics[i].id !== id) {
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode('WELCOME');
        }} ></input></li>
      </>
  }

  else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      // 전개 연산자
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  }

  else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content =
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          console.log(title, body);
          const updateTopic = { id: id, title: title, body: body };
          const newTopics = [...topics];

          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updateTopic;
              break;
            }
          }

          setTopics(newTopics);
          setMode('READ');
        }}></Update>
  }

  return (
    <div>
      {/* 주석은 이렇게 ...*/}
      {/* 중괄호로 감싸지 않으면>> ...*/}

      <Header title="REACT" onChangeMode={function () {
        setMode('WELCOME');
      }}></Header>

      <Nav topics={topics} onChangeMode={(id) => {
        setMode("READ");
        setId(id);
      }}></Nav>

      {content}

      {/* <Article title='Welcome' body='Hello, Web'></Article> */}

      {/* <hr />
      <Comp01 />
      <hr />
      <Comp02 />
      <hr />
      <Keduit /> */}

      {/* <Wrapper>
        <Hello color='green' name='React' favoriteNumber={100}></Hello>
        <Hello color='blue'></Hello>
        <Hello name={100} color='pink'></Hello>
      </Wrapper> */}

      {/* <hr />
      <Counter />
      <hr />
      <Counter1 /> */}
      <ul>
        <li>
          <a href="/create" onClick={event => (
            event.preventDefault(),
            setMode('CREATE')
          )}>Create</a></li>
        {contextControl}
      </ul>
    </div >

  );
}

export default App;
