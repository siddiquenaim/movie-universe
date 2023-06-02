import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./ShowDetails.css";
import ScrollToTop from "react-scroll-to-top";

const ShowDetails = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center my-4">{show?.show?.name}</h2>
      <div className="container d-md-flex align-items-center justify-content-center gap-5">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <img src={show?.show?.image?.medium} alt="" />
        </div>
        <div className="w-md-50">
          <p>
            <span className="fw-bold">Type:</span> {show?.show?.type}
          </p>
          <p>
            {" "}
            <span className="fw-bold">Status:</span> {show?.show?.status}
          </p>

          <p>
            <span className="fw-bold">Summary:</span> {show?.show?.summary}
          </p>
          <p>
            <span className="fw-bold">Schedule:</span>{" "}
            {show?.show?.schedule?.time}, {show?.show?.schedule?.days}
          </p>
          <div className="text-center text-md-start mt-4">
            <Link to={`/show-ticket/${show?.show?.id}`}>
              <Button variant="danger">Book Movie Ticket</Button>
            </Link>
          </div>
          <ScrollToTop top smooth />
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
