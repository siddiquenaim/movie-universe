import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useLoaderData, useParams } from "react-router-dom";

function ShowTicket() {
  const [show, setShow] = useState({});
  const allShows = useLoaderData();
  const id = useParams();
  useEffect(() => {
    if (allShows) {
      let showDetails = allShows.find(
        (singleShow) => singleShow.show.id == id.id
      );
      if (showDetails) {
        setShow(showDetails);
      }
    }
  }, [id, allShows]);
  return (
    <div className="container">
      <h2 className="text-center my-4">
        Book your ticket for {show?.show?.name}
      </h2>

      <Form className="container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your email address</Form.Label>
          <Form.Control required type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control value={show?.show?.name} rows={3} />
        </Form.Group>
        <Form.Group className="text-center">
          <Form.Control
            className="btn btn-danger fw-bold text-center"
            type="submit"
            value="Book now"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default ShowTicket;
