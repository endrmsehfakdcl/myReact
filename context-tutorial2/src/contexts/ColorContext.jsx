import { createContext, useState } from "react";
// ColorContext 구조
const ColorContext = createContext(
  { // 객체를 createContext
    state: { color: 'black', subColor: 'red' },
    actions: {
      setColor: () => { },
      setSubColor: () => { }
    }
  }
);

//↓↓↓ ColorContext와 value가 동일한 구조 ↓↓↓
// Provider
const ColorProvider = ({ children }) => {
  // color, subColor 관리
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');
  // value 객체 선언
  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor }
  }
  // {value} 값을 가진 children을 return
  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  )
}

//Consumer
// const ColorConsumer = ColorContext.Consumer;
// ColorBox.jsx SelectColors.jsx 에서 import
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer } 
export default ColorContext;