import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../slices/counter/counterSlice'

export function Counter() {
  const count = useSelector((globalState) => globalState.counter.valeur)
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(20))}
        >
          Incrementation de 20
        </button>
      </div>
    </div>
  )
}