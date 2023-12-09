import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyinput } from '../Slice/Counter_slice'

function New_Counter() {

    const rif = useSelector(y=>y.counter.data)
    console.log(rif)

    const dis = useDispatch()

  return (
    <>
        <div>{rif}</div>
        <button onClick={()=>dis(increment())}>Increment</button>
        <button onClick={()=>dis(decrement())}>Decrement</button>
        <button onClick={()=>dis(incrementbyinput(3))}>Increment by 3</button>
    </>
  )
}

export default New_Counter