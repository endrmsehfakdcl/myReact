import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  const goArticle = () => {
    navigate('/articles', { replace: true });
  }
  return (
    <div>
      {/* 객체로 쓰려고 중괄호 2개 */}
      <header style={
        {
          background: 'lightgray',
          padding: 16,
          fontSize: 24
        }
      }>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticle}>게시글목록</button>
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout