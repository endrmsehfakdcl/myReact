import React from 'react'
import styled from 'styled-components'
// styled-components는 백틱` 기호를 사용한다
const SimpleButton = styled.button`
  color: white;
  background: green;
`;
// style버튼을 상속받은 버튼
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

// 일반 버튼을 상속하는 경우 className을 props로 지정한다
const ReactButton = props => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>
}
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

//백틱 내부 주석 처리는 JSX 주석 문법 사용 후 문자열 연결
const PrimaryButton = styled.button`
${/*
  color: ${function (props) {
    console.log('props', props);
    if (props.primary) {
      return 'red';
    }
    else {
      return 'blue';
    }
  }};
*/ ''}

  color: ${props => props.$primary ? 'red' : 'blue'};
  background-color: ${props => props.$primary ? 'grey' : 'white'};
`;

const Styled = () => {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React Button</ReactButton>
      <ReactLargeButton>React Large Button</ReactLargeButton>
      <PrimaryButton >normal</PrimaryButton>
      <PrimaryButton $primary='true'>primary</PrimaryButton>
    </div>
  )
}

export default Styled