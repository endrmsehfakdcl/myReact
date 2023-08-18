import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park'
    },
    increase(state, action) {
      StaticRange.age += action.payload
    }
  }
})

export let { changeName, increase } = user.actions;

const cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 0,
      name: "White and Black",
      imgUrl: "img/shoes1.jpg",
      count: 2
    },
    {
      id: 1,
      name: "Red Knit",
      imgUrl: "img/shoes2.jpg",
      count: 1
    },
    {
      id: 2,
      name: "Grey Yordan",
      imgUrl: "img/shoes3.jpg",
      count: 1
    }
  ],
  reducers: {
    // 
    addCount(state, action) {
      const num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      console.log(num);
      state[num].count++;
    },
    // 
    decreaseCount(state, action) {
      const num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      if (state[num].count > 0) {
        state[num].count--;
      }
      else if (state[num].count === 0) {
        alert('상품이 더이상 없습니다.');
      }
    },
    // 
    deleteItem(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(num, 1);
    },
    //
    addItem(state, action) {
      const num = state.findIndex((a) =>
        a.id === action.payload.id
      )
      if (num !== -1) {
        state[num].count++;
      }
      else {
        state.push(action.payload)
      }
    },
    sortName(state, action) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1))
    }
  }
})

export let { addCount, decreaseCount, addItem, deleteItem, sortName } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})