import React, { useEffect, useState } from 'react'

function FetchTry() {

    const [data,setdata] = useState([])

    

    useEffect(()=>{
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=3c340be0')
        .then(y => y.json())
        .then(y =>setdata(y))
    },[])


    console.log(data ,"ddddd");

  return (
    <>
        <div>{data.Title}</div>
    </>
  )
}

export default FetchTry
