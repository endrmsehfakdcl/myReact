import React from 'react'
import styled from 'styled-components'
import KaKaoLogin from './KakaoLogin'
import NaverLogin from './NaverLogin'
import { GoogleLogin } from '@react-oauth/google'

const StyledLoginWrap = styled.div`
  width: 460px;
  height: 673px;
  padding: 30px 20px 100px 20px;
  margin: 0 auto;
  background-color: #fff;
  text-align: left ;
  `

const StyledBody = styled.div`
  width: 460px;
  height: 898px;
  color: #333;
  background-color: #f4f4f4;
  `
const StyledLoginBox = styled.div`
    width: 430px;
    heigth: 219px;
    margin: 0 auto;
  `
const StyledLogo = styled.div`
  padding-top: 45px;
  padding-bottom: 11px;
  text-align: center;
  `

const StyledUl = styled.ul`
    width: 100%;
    height: 100px;
    list-style: none;
    padding: 0;
    padding-top: 3px;
    margin: 0;
  `
const StyledLi = styled.li`
    width: 418px;
    height: 39px;
    margin-bottom: 10px;
    
    
  `
const StyledInput = styled.input`
  width: 418px;
  height: 39px;
  border: none;
  
  padding-left: 10px;
  `



const StyledInputButton = styled.input`
    width: 418px;
    height: 39px;
    padding: 3px 6px 1px;
    border: none;
    color: white;
    background-color: #ef3e42;
    line-height: 33px;
  
  `

const StyledP = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `


////////////////////////////////////////////
const SnsLoginWrap = styled.div`
    width: 430px;
    margin: 0 15px;
    display: grid;
    grid-template-columns: 215px 215px;
	  grid-template-rows: 50px 50px;
  `
const SnsLoginNaver = styled.div`
    width: 208px;
    height: 43px;
    background-color: #279c00;
    color: white;
    text-decoration: none;
    font-size: 15px;
    border: none;
  `

const SnsLoginKakao = styled.div`
    width: 208px;
    height: 43px;
    background-color: #ffde00;
    color: #3b1e1e;
    text-decoration: none;
    font-size: 15px;
    border: none;
  `

const SnsLoginGoogle = styled.div`
    width: 208px;
    height: 43px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: black;
    text-decoration: none;
    font-size: 15px;
  `

////////////////////////////////////////////
const StyledHelp = styled.div`
    text-align: center;
  `

const StyledHelpMenu = styled.a`
    text-decoration: none;
    color: #707070;
  `
////////////////////////////////////////////////

const Login = () => {
  return (
    <StyledLoginWrap>
      <StyledBody>
        <form>
          <StyledLoginBox>
            <StyledLogo>
              <img src="https://placehold.it/119x30" alt="logo" />
            </StyledLogo>
            <StyledUl>
              <StyledLi>
                <StyledInput type="text" placeholder='아이디' />
              </StyledLi>
              <StyledLi>
                <StyledInput type="password" placeholder='비밀번호' autoComplete='' />
              </StyledLi>
            </StyledUl>
            <div>
              <StyledInputButton type="button" value='로그인' />
            </div>
            <StyledP>
              <span>
                <input type="checkbox" id='autoLogin' />
                <label htmlFor="autoLogin">자동로그인</label>
              </span>
              <span>
                <input type="checkbox" id='saveId' />
                <label htmlFor="saveId">아이디 저장</label>
              </span>
            </StyledP>
          </StyledLoginBox>
        </form>

        <SnsLoginWrap>
          <SnsLoginNaver><NaverLogin></NaverLogin></SnsLoginNaver>
          {/* <SnsNaverLogin href="/snsNaverLogin">
            <span>
              네이버 로그인
            </span>
          </SnsNaverLogin> */}
          <SnsLoginKakao><KaKaoLogin></KaKaoLogin></SnsLoginKakao>
          {/* <SnsKakaoLogin href="/snsKakaoLogin">
            <span>
              카카오 로그인
            </span>
          </SnsKakaoLogin> */}
          <GoogleLogin></GoogleLogin>
          {/* <SnsGoogleLogin href="/snsGoogleLogin">
            <span>
              구글 로그인
            </span>
          </SnsGoogleLogin> */}
        </SnsLoginWrap>

        <StyledHelp>
          <StyledHelpMenu href="">아이디 찾기 | </StyledHelpMenu>
          <StyledHelpMenu href="">비밀번호 찾기 | </StyledHelpMenu>
          <StyledHelpMenu href="">회원가입</StyledHelpMenu>
        </StyledHelp>
      </StyledBody>
    </StyledLoginWrap>
  )
}

export default Login