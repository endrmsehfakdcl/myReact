import React, { useState } from 'react';
import styled from 'styled-components'


const StyledHeader = styled.header`
background-color: white;
color: black;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`
const StyledHeaderTop = styled.div`
display: flex;
justify-content: space-between;
height: 100px;
align-items: center;
width: 80%;
`

const StyledSearchWrap = styled.div`
width: 736px;
height: 50px;
`

const StyledSearch = styled.div`
display: flex;
width: 450px;
height: 50px;
padding: 5px;
border: 1px solid rgba(0,0,0,.08);
border-radius: 25px;
margin-right: 10px;
`
const StyledLogo = styled.div`
width: 195px;
height: 38px;
`

const StyledInput = styled.input`
display: flex;
align-items: center;
border: none;
color: #111;
margin-left: 2px;
margin-top: 15px;
width: 400px;
height: 20px;
padding: 0px;
`

const StyledButton = styled.button`
width: 50px;
height: 50px;
border: none;
border-radius: 25px;
`

const StyledHeaderTopUserMenu = styled.div`
display: flex;
justify-content: flex-end;
gap: 20px;
`

const StyledA = styled.a`
text-decoration: none;
color: #111;
cursor: pointer;
`
const StyledARanking = styled.a`
display: flex;
justify: space-between;
text-decoration: none;
color: #8e43e7;
cursor: pointer;
`

const StyledHeaderBottom = styled.div`
display: flex;
width: 80%;
margin: 10px 0;
font-s
`

const StyledCategory = styled.div`
display: flex;
gap: 20px;
`

const StyledVerticalDivider = styled.div`
border-left: 1px solid black;
height: 21px;
margin: 0 10px;
`

const StyledHeaderRanking = styled.div`
color: #8e43e7;
`
const StyledHorizontalDivider = styled.div`
border-bottom: 1px solid black;
width: 100%
`


function Header() {
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    alert(`검색어: ${searchText}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };


  return (
    <StyledHeader className="header">
      {/* 헤더 상단 - 로고 검색창 로그인 회원가입 마이페이지 예약확인/취소 */}
      <StyledHeaderTop className="header_top">

        <StyledLogo className="header_logo">
          <img src="http://placehold.it/195x38" alt="logo" />
        </StyledLogo>
        <StyledSearch className="header_search">
          <StyledInput
            type="text"
            placeholder="검색창입니다."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <StyledButton onClick={handleSearchClick}>
            <img src="http://placehold.it/20x20" alt="search" />
          </StyledButton>
        </StyledSearch>
        <StyledHeaderTopUserMenu className="header_userMenu">
          <StyledA href="/login">로그인</StyledA>
          <StyledA href="/account-create">회원가입</StyledA>
          <StyledA href="/mypage">마이페이지</StyledA>
          <StyledA href="/reservation">예약확인/취소</StyledA>
        </StyledHeaderTopUserMenu>
      </StyledHeaderTop>

      {/* 헤더 하단 - 뮤지컬 콘서트 연극 | 랭킹 */}
      <StyledHeaderBottom className="header_bottom">
        <StyledCategory className="header_category">
          <StyledA href="/musicals">뮤지컬</StyledA>
          <StyledA href="/concerts">콘서트</StyledA>
          <StyledA href="/plays">연극</StyledA>
        </StyledCategory>
        <StyledVerticalDivider className='menu_Divider' />
        <StyledHeaderRanking className="header_ranking">
          <StyledARanking href="/ranking">랭킹</StyledARanking>
        </StyledHeaderRanking>
      </StyledHeaderBottom>
      <StyledHorizontalDivider />
    </StyledHeader>
  );
}

export default Header;