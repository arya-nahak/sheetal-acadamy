import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Division, Increment, Multiplication } from '../Action/Action_new';

function Counter_data() {

    const counter = useSelector(y=>y.counter)

    const dis = useDispatch();

    const incr = () =>{
        dis(Increment())
    }

    const decr = () =>{
        dis(Decrement())
    }

    const mult = () =>{
        dis(Multiplication())
    }

    const divi = () =>{
        dis(Division())
    }



  return (
    <>
    <div>
        {
            counter
        }
    </div>
    <div>
        <button onClick={incr}>Increment</button>
        <button onClick={decr}>Decrement</button>
    </div>
    <div>
        <button onClick={mult}>Multiply by 2</button>
        <button onClick={divi}>Divide by 2</button>
    </div>
    </>
  )
}

export default Counter_data