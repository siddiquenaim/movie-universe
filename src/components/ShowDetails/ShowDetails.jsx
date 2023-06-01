import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

  console.log(show);
  return (
    <div className="container">
      <h2 className="text-center my-4">{show?.show?.name}</h2>
      <div className="d-flex align-items-center justify-content-center">
        <img src={show?.show?.image?.medium} alt="" />
      </div>
    </div>
  );
};

export default ShowDetails;
