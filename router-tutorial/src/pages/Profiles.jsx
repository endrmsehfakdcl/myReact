import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profiles = () => {
  return (
    <div>
      <h2>사용자 목록 :</h2>
      <Outlet />
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  )
}

export default Profiles