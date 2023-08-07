import React from 'react'
import PropTypes from 'prop-types'

const Hello = props => {
  // props를 2개 받음
  const { color, name, favoriteNumber } = props;
  return (
    <div style={{ color }}>
      <h1>안녕하세요 {name}</h1>
      <h1>제가 좋아하는 숫자는 {favoriteNumber}입니다.</h1>
    </div>
  )
}
// 디폴트를 주고 싶다면
Hello.defaultProps = {
  name: "무명씨"
}
// 타입 체크하는 법
Hello.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default Hello