import React from 'react'
import { ColorConsumer } from '../contexts/ColorContext';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple'];
const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer'
                }}
                //좌클릭 했을 때 이벤트 핸들러
                onClick={() => actions.setColor(color)}
                //우클릭 했을 때 커스텀한 동작처리
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              >
              </div>
            ))}
          </div>
        )
        }
      </ColorConsumer >
      <hr />
    </div >
  )
}

export default SelectColors