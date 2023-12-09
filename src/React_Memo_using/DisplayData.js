import React from "react";

function DisplayData(data) {
  console.log(data);

  const handleEdit = (e) =>{
    
  }

  const handleDelete = (e) =>{
    console.log(e)
    let d = [...data.data].filter((el,ind)=> ind !== e)
    data.setdata(d)
    
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((e,i) => {
            return (
              <tr>
                <th scope="row">{e.firstName}</th>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td><button onClick={()=>{handleEdit(i)}}>edit</button></td>
                <td><button onClick={()=>{handleDelete(i)}}>delete</button></td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default React.memo(DisplayData);
