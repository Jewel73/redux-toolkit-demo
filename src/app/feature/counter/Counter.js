import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice';

export default function Counter() {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

  return (
    <div>
        <h1>{count}</h1>
        <br></br>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())} > decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>incrementByAmount</button>
    </div>
    
  )
}
