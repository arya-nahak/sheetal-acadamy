import React, { useState } from "react";
import Employeechild from "./Employeechild";

function Employee() {
  const [data, setdata] = useState("");
  const [arr, setarr] = useState([]);

  const handleChange = (e) => {
    setdata(e.target.value)
  };

  const saveData = (e) =>{
    e.preventDefault()

    let dummy = [...arr]
    
    dummy.push(data)

    setarr(dummy)


  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <input type="button" onClick={saveData} />
      <Employeechild data={arr}/>
    </>
  );
}

export default Employee;
