import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function MovieCard(item) {
  return (
    <>
      {<div className="row">
        {item.item.map((e,i) => {
          return (
            <Card col={6} key={i} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>
                  {e.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{e.Type}</ListGroup.Item>
                <ListGroup.Item>Price : {e.price}</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </div>
      
      
      }
    </>
  );
}

export default MovieCard;
