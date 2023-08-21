import React from 'react'

const AccountForm = () => {
  return (
    <div>
      <div>
        {/* 아이디 */}
        <div className='uBlock'>
          <div className="inputArea">
            <label htmlFor="">아이디</label>
            <input type="text" placeholder='6~20자 영문, 숫자' />
          </div>
          <div className="errorText">
            영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.
          </div>
        </div>
        {/* 비밀번호 */}
        <div className='uBlock'>
          <div className="inputArea">
            <label htmlFor="">비밀번호</label>
            <input type="text" placeholder='8~12자 영문, 숫자, 특수문자' />
          </div>
          <div className="errorText">
            8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.
          </div>
        </div>
        {/* 비밀번호 확인 */}
        <div className='uBlock'>
          <div className="inputArea">
            <label htmlFor="">비밀번호 확인</label>
            <input type="text" placeholder='8~12자 영문, 숫자, 특수문자' />
          </div>
          <div className="errorText">
            8~12자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.
          </div>
        </div>

        {/* 개인정보 유효기간 */}
        <div className='uBlock validation'>
          <div>개인정보 유효기간</div>
          <div className='radioBox'>
            <label htmlFor="">
              <input type="radio" />
              <span>탈퇴 시까지</span>
            </label>
            <label htmlFor="">
              <input type="radio" />
              <span>1년</span>
            </label>
          </div>
          <div>개인정보 유효기간 경과 이후 파기 또는 분리저장, 관리합니다.</div>
        </div>

        {/* 이름 */}
        <div className='uBlock'>
          <div className="inputArea">
            <label htmlFor="">이름</label>
            <input type="text" />
          </div>
        </div>
        {/* 이메일 */}
        <div className='uBlock'>
          <div className="inputArea">
            <label htmlFor="">이메일</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">
              <select name="" id="">
                <option value="">직접입력</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </label>
          </div>
          <div className="errotText">비밀번호 찾기 시 사용되니, 정확한 이메일 주소를 작성해주세요.</div>
        </div>
        {/* 휴대폰 */}
        <div className='uBlock'>
          <div className='inputArea'>
            <label htmlFor="">휴대폰</label>
            <input type="text" />
            <button>인증번호받기</button>
          </div>
        </div>

        <div className='uBlock checkBlock'>
          <div className='checkBox'>
            <label htmlFor="">
              <input type="text" />
              <span>SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)</span>
            </label>

          </div>
          <div className='checkBox'>
            <label htmlFor="">
              <input type="text" />
              <span>14세 미만입니다.</span>
            </label>

          </div>
        </div>
        <div className='uBlock'>
          <p>만 14세 미만 회원은 법정대리인(부모님) 동의를 받은 경우만 회원가입 가능합니다.</p>
        </div>
        <div className='uBlock'>
          <div className="inputArea"></div>
          <div className="errorText"></div>
        </div>
        <div className='uBlock'>
          <div className="inputArea"></div>
          <div className="errorText"></div>
        </div>
        <div className='uBlock'>
          <div className="inputArea"></div>
          <div className="errorText"></div>
        </div>

        <div className='uBlock'>
          <button></button>
        </div>

      </div>
    </div>
  )
}

export default AccountForm