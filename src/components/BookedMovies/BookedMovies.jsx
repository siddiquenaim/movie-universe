import Table from "react-bootstrap/Table";
import { getBookedShows } from "../../utilities/localStorage";
import { useLoaderData } from "react-router-dom";

const BookedMovies = () => {
  const movies = useLoaderData();
  console.log(movies);
  return (
    <div className="container my-4">
      <h2 className="text-center my-4">Your Booked Movies</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Movie Name</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, i) => (
            <tr key={movie?.show?.id}>
              <td>{i + 1}</td>
              <td>{movie?.show?.name}</td>
              <td>{movie?.show?.schedule?.days}</td>
              <td>{movie?.show?.schedule?.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookedMovies;
