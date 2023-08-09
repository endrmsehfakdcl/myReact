import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, NavLink, HashRouter, useParams } from 'react-router-dom'; //BrowserRouter,

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

// 초기값
const contents = [
  {
    id: 1,
    title: 'HTML',
    description: 'HTML is ...'
  },
  {
    id: 2,
    title: 'JS',
    description: 'HTML is ...'
  },
  {
    id: 3,
    title: 'React',
    description: 'HTML is ...'
  }
];

function Topic() {
  const params = useParams();
  console.log(params);
  const topic_id = params.topic_id;
  // 못찾는 경우를 대비한 초기값
  let selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };

  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      //contents[topic_id]
      selected_topic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={'/topics/' + contents[i].id}>
          {contents[i].title}
        </NavLink>
      </li>
    )
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/* <li><NavLink to='/topics/1'>HTML</NavLink></li>
        <li><NavLink to='/topics/2'>JS</NavLink></li>
        <li><NavLink to='/topics/3'>React</NavLink></li> */}
        {lis}
      </ul>
      <Routes>
        {/* <Route path='/1' element={'HTML is ...'} />
        <Route path='/2' element={'JS is ...'} />
        <Route path='/3' element={'React is ...'} /> */}
        <Route path='/:topic_id' element={<Topic />} />
      </Routes>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/topics/*' element={<Topics />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
