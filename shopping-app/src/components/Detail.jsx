import React, { useState, useEffect } from 'react'
import { Button, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItem } from '../store'

const Box = styled.div`
  padding: 20px;
  color: gray;
`
const YellowBtn = styled.button`
  background: gold;
  color: white;
  font-size: 30px;
  width:100%;
  padding: 100px;
  border: 1px solid #ccc;
  background-image: url('https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80'); 
  background-size: cover;
  background-position: center;
`

const Detail = (props) => {
  let { id } = useParams();
  id = parseInt(id || 0);
  console.log(id);
  const { title, imgUrl, content, price } = props.data.find(item => item.id === id);
  const [tap, setTap] = useState(0);
  const [fade, setFade] = useState('');
  useEffect(() => {
    setFade('end');
    return (() => {
      setFade('');
    })
  }, []);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='row'>
        <div className={'container start ' + fade}>
          <Box>
            <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
          </Box>
        </div>
        <div className='col-md-6'>
          <img src={'../' + imgUrl} alt={title} width='90%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button
            className='btn btn-danger me-2'
            onClick={() => {
              dispatch(addItem({
                id: id,
                imgUrl: imgUrl,
                price: price,
                title: title,
                count: 1
              }));
            }}
          >주문하기</button>
          <Link to='/cart'>
            <Button variant='outline-success'>주문상품 확인하기</Button>
          </Link>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='link0' className='mt-5'>
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