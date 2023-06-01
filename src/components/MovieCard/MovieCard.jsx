import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  const { show } = movie;
  return (
    <Card className="col-md-3" style={{ width: "full" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{show.id}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
