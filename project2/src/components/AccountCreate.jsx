import React from 'react'

const AccountCreate = () => {
  return (
    <div>
      <div>

        <div>
          <h2>기분최고조 회원가입</h2>
          <p>지금 회원가입 하신 후 기분최고조에서<br />다양한 서비스를 경험해보세요</p>
          <button>개인 회원가입</button>
          <div>
            <ul>
              <li><a href="/naveraccountlogin">네이버로 가입</a></li>
              <li><a href="/kakaoaccountlogin">카카오로 가입</a></li>
              <li><a href="/googleaccountlogin">구글로 가입</a></li>
            </ul>
            <p>SNS계정 회원가입(만 14세 이상 가능)</p>
          </div>
        </div>

        <div>
          <button>사업자 회원가입</button>
        </div>
        <p>회사, 단체 구매는 사업자회원으로 가입하여 이용해 보세요!</p>

      </div>

    </div>
  )
}

export default AccountCreate