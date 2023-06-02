import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useLoaderData, useParams } from "react-router-dom";
import { bookShow } from "../../utilities/localStorage";
import Swal from "sweetalert2";

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

  const handleBookShow = (event) => {
    event.preventDefault();
    bookShow(id.id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Ticket has been booked successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">
        Book your ticket for {show?.show?.name}
      </h2>

      <Form className="container my-4" onSubmit={handleBookShow}>
        <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="mb-2"
            required
            type="text"
            placeholder="Your Name"
          />

          <Form.Label>Your email address</Form.Label>
          <Form.Control
            className="mb-2"
            required
            type="email"
            placeholder="name@example.com"
          />

          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control
            className="mb-2"
            required
            type="number"
            minLength={10}
          />

          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            className="mb-2"
            disabled
            defaultValue={show?.show?.name}
          />
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
