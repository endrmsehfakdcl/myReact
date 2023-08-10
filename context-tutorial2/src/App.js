import { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Message from "./components/Message";
import LangContext from "./contexts/LangContext";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/ColorContext";
import SelectColors from "./components/SelectColors";
import Page from "./components/Page";
import { ThemeContext } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";
import './App.css'

function App() {
  const [lang, setLang] = useState('en');
  const onToggleLang = () => {
    const changeLang = lang === 'en' ? 'kr' : 'en';
    setLang(changeLang);
  }

  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      {/* 컨텍스트 연습1 */}
      <LangContext.Provider value={lang}>
        <Button onToggleLang={onToggleLang} />
        <Title />
        <Message />
      </LangContext.Provider>
      <hr />
      
      {/* <ColorContext.Provider value={{ color: 'red' }}>
        <div>
          <ColorBox />
        </div>
      </ColorContext.Provider> */}

      {/* 색상선택 */}
      <ColorProvider>
        <SelectColors></SelectColors>
        <ColorBox />
      </ColorProvider>
      <hr />

      {/* 다크모드 */}
      <UserContext.Provider value={'사용자'}>
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          <Page></Page>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
