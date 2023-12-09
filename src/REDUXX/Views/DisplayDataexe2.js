import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../Action/Actionexe2";

function DisplayDataexe2() {

  const mydata = useSelector(y=>y)

  console.log(mydata,"lollllll")

  const dis = useDispatch()

  const pre = () =>{
    dis(prev())
  }

  const nxt = () =>{
    dis(next())
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{mydata.data[mydata.index]}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Button onClick={pre} variant="primary">Prev</Button>
      <Button onClick={nxt} variant="primary">Next</Button>
    </>
  );
}

export default DisplayDataexe2;
