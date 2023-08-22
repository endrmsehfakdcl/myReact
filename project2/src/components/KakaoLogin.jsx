import styled from 'styled-components'

const KaKaoLogin = () => {
    const REST_API_KEY = '98fb1054fadbc801e5b9337e8492549d'
    const REDIRECT_URL = 'https://localhost:3000/auth'
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`
    const handleLogin = () => {
        window.location.href = kakaoURL
    }
    // const code = new URL(window.location.href).searchParams.get("code");
    // console.log(code);

    const Button = styled.button`
    width: 208px;
    height: 43px;
    background-color: #ffde00;
    color: #3b1e1e;
    text-decoration: none;
    font-size: 15px;
    border: none;
    `

    return (
        <>
            <Button onClick={handleLogin}>카카오 로그인</Button>
        </>
    )
}
export default KaKaoLogin