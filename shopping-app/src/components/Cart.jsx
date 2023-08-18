import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'react-bootstrap'
import { addCount, decreaseCount, deleteItem } from '../store';

const Cart = () => {
  const state = useSelector((state) => state);
  console.log('state: ', state.cart[0].name); //state:  White and Black
  const dispatch = useDispatch();

  return (
    <div>
      <h5>{state.user.name} {state.user.age}의 장바구니</h5>

      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i) =>
              <tr key={i}>
                <td>{state.cart[i].id + 1}</td>
                <td><img src={state.cart[i].imgUrl} alt={state.cart[i].name} width='20%' /></td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <Button onClick={() => {
                  dispatch(addCount(state.cart[i].id))
                }}>+</Button>
                <Button onClick={() => {
                  dispatch(decreaseCount(state.cart[i].id))
                }}>-</Button>
                <Button onClick={() => {
                  dispatch(deleteItem(state.cart[i].id))
                }}>삭제</Button>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Cart