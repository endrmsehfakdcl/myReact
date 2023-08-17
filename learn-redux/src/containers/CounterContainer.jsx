import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { increase, decrease, setDiff } from '../modules/counter'
import Counter from '../components/Counter';

const CounterContainer = () => {
  // Selector unknown returned a different result when called with the same parameters. 
  //This can lead to unnecessary rerenders. Selectors that return a new reference (such as an object or an array) should be memoized
  // const { number, diff } = useSelector(state => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff
  // }), 
  // shallowEqual
  //);
  const number = useSelector(state => state.counter.number);
  const diff = useSelector(state => state.counter.diff);


  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    ></Counter>
  )
}

export default CounterContainer