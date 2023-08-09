import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import Profiles from './pages/Profiles';
import Styled from './pages/Styled';
import ScssButton from './pages/ScssButton';
import Check from './pages/Check';
import APIPage from './pages/APIPage';

function App() {
  // https://velog.io/@velopert/react-router-v6-tutorial#1-%EB%9D%BC%EC%9A%B0%ED%8C%85%EC%9D%B4%EB%9E%80

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about?detail=true&mode=100">소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필</Link>
        </li>
        <li>
          <Link to='/articles'>게시글 목록</Link>
        </li>
        <li>
          <Link to='/styled'>스타일 컴포넌트</Link>
        </li>
        <li>
          <Link to='/sass'>Sass 스타일링</Link>
        </li>
        <li>
          <Link to='/check'>CSS Module 스타일링</Link>
        </li>
        <li>
          <Link to='/apipage'>API 테스트 페이지</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profiles' element={<Profiles />}></Route>
          <Route path='/profiles/:username' element={<Profile />}></Route>
        </Route>
        {/* <Route path='/profiles/*' element={<Profile />}></Route> */}
        <Route path='/articles' element={<Articles />}>
          <Route path=':id' element={<Article />}></Route>
        </Route>
        {/* <Route path='/articles/:id' element={<Article />}></Route> */}
        <Route path='/styled' element={<Styled />}></Route>
        <Route path='/sass' element={<ScssButton />}></Route>
        <Route path='/check' element={<Check />}></Route>
        <Route path='/apipage' element={<APIPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
