import React, { useContext } from 'react'
import LanguageContext from '../ContextData'

function Datausecontext() {

    const {data,setdata} = useContext(LanguageContext)

    
    const changeHandler = (e) =>{
        setdata(e.target.value)

    }


  return (
    <>
        <div>
            <select onChange={changeHandler}>
                <option value="en">English</option>
                <option value="hindi">Hindi</option>
                <option value="gj">Gujarati</option>
            </select>
        </div>
    </>
  )
}

export default Datausecontext