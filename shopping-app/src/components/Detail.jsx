import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  let { id } = useParams();
  id = parseInt(id || 0);
  console.log(id);
  const { title, imgUrl, content, price } = props.data.find(item => item.id === id);
  const [tap, setTap] = useState(0);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={'../' + imgUrl} alt={title} width='90%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link onClick={() => { setTap(0) }} eventKey='link0'>상품내역</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTap(1) }} eventKey='link1'>배송안내</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTap(2) }} eventKey='link2'>문의하기</Nav.Link>
        </Nav.Item>
      </Nav>

      <TapContent tap={tap}></TapContent>
    </div>
  )
}

// function TapContent({ tap }) {
//   return [
//     <div>내용0</div>,
//     <div>내용1</div>,
//     <div>내용2</div>
//   ][tap]
// }
function TapContent({ tap }) {
  if (tap === 0) {
    return <div>
      상품내역입니다.
    </div>
  }
  else if (tap === 1) {
    return <div>
      배송안내입니다.
    </div>
  }
  else if (tap === 2) {
    return <div>
      문의하기입니다.
    </div>
  }
}

export default Detail