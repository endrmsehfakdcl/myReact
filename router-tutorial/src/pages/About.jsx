import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(); // 2개의 값을 받게 되어있다.
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    // 토글 버튼이므로 true면 false로 false면 true로 변환
    setSearchParams({ mode, detail: detail === 'true'  ? false : true});
  }

  const onIncreaseMode = () => {
    // null 값이면 1, 그 외에는 mode + 1
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  }
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 페이지입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <p>쿼리스트링: {location.search}</p>
      <p>현재 주소의 경로: {location.pathname}</p>
      <button onClick={ onToggleDetail }>Toggle Detail</button>
      <button onClick={ onIncreaseMode }>Mode + 1</button>
      {/* <p>hash: {location.hash}</p>
      <p>state: {location.state}</p>
      <p>key: {location.key}</p> */}
    </div>
  )
}

export default About