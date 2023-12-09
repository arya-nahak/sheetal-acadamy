import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { first } from "../Action/Combine_Action";
import Table from 'react-bootstrap/Table';

function Product() {
  const prod = useSelector(y => y.product);

  const dis = useDispatch();

  console.log(prod,"rrrrrrrrr")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(y => y.json())
      .then(y => {
        dis(first(y));
      });
  },[]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {prod.items.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.category}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Product;
