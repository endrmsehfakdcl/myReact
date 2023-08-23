import React from 'react'
import './AccountCreate.css'
import NaverLogin from './NaverLogin'
import KakaoLogin from './KakaoLogin'
import { GoogleLogin } from '@react-oauth/google'

const AccountCreate = () => {
  return (
    <div>
      <div className='joinWrapper'>
        <div className='joinBlock'>
          <h2 className='title'>기분최고조 회원가입</h2>
          <p className='text'>지금 회원가입 하신 후 다양한 서비스를 경험해보세요</p>
          <button type='button' className='IMBtn'>개인 회원가입</button>
          <div className='snsLoginDiv'>
            <ul className='snsLoginUl'>
              <li className='snsLoginli'>
                <NaverLogin></NaverLogin>
              </li>
              <li className='snsLoginli'>
                <KakaoLogin></KakaoLogin>
              </li>
              <li className='snsLoginli'>
                <GoogleLogin></GoogleLogin>
              </li>
            </ul>
            <p className='text'>SNS계정 회원가입(만 14세 이상 가능)</p>
          </div>
        </div>

        <div>
          <button type='button' className='BMBtn'>사업자 회원가입</button>
        </div>
        <p className='text'>회사, 단체 구매는 사업자회원으로 가입하여 이용해 보세요!</p>

      </div>

    </div>
  )
}

export default AccountCreate