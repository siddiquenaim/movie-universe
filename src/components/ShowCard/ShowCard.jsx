import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowCard = ({ movie }) => {
  const { show } = movie;
  return (
    <Card className="col-md-3 bg-white" style={{ width: "full" }}>
      <Card.Img variant="top" src={show.image.medium} />
      <Card.Body>
        <div className="mb-3">
          <Card.Title>{show.name}</Card.Title>
          <Card.Text>
            {show.genres.map((genre, i) => (
              <span
                className="px-1 py-1 rounded bg-danger me-2 text-white fs-6"
                key={i}
              >
                {genre}
              </span>
            ))}
          </Card.Text>
        </div>
        <Card.Text>
          Language: <span className="fw-bold">{show?.rating?.average}</span>
        </Card.Text>
        <Card.Text>
          Language: <span className="fw-bold">{show?.language}</span>
        </Card.Text>
        <Link to={`shows/${show.id}`}>
          <Button variant="danger">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ShowCard;
