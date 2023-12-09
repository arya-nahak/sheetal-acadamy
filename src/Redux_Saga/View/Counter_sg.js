import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter_sg() {

    const count = useSelector(y=>y.saga)

    const dis = useDispatch()
    
    const inc = () =>{
        dis({type:'INCREMENT_ASYNC'})
    }
    
    const dec = () =>{
        dis({type:'DECREMENT_ASYNC'})
    }

  return (
    <>

        <button onClick={inc}>inc</button>
        <div>{count}</div>
        <button onClick={dec}>dec</button>
    </>
  )
}

export default Counter_sg