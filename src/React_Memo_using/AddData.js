import React, { useState } from "react";
import DisplayData from "./DisplayData";

function AddData() {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [data2,setdata2]=useState([])
  const [newdata,setnewdata]=useState(-1)

  const handlerSubmit = (e) => {
    e.preventDefault();
    // console.log(data);

    let de = [...data2]
    
    de.push(data)

    setdata2(de)
    
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="firstName">FirstName :</label>
        <input
          name="firstName"
          id="firstName"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="lastName">LastName :</label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="email">Email :</label>
        <input name="email" id="email" type="email" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">save</button>
      </form>
      <DisplayData data={data2} setdata={setdata2} newdata={newdata} setnewdata={setnewdata}/>
    </>
  );
}

export default AddData;
