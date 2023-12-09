import React, { useState } from 'react'
import axios from 'axios'

function DataApi() {
    const [data,setdata]=useState([])

    axios.get('https://fakestoreapi.com/products')
    .then(y=>setdata(y.data))

  return (
    <>
        <ul>
            {
                data.map((e)=>{
                    return(
                        
                        <li>{e.title}</li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default DataApi