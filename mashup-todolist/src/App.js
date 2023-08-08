import React from "react";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

function App() {
  return (
    <div className="">
      <GlobalStyle />
      <div>안녕하세요</div>
    </div>
  );
}

export default App;
