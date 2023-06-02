import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Movie Universe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="me-3 nav-link">
              Home
            </NavLink>
            <NavLink to="/booked-movies" className="nav-link">
              Booked Movies
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// <Navbar bg="danger" variant="dark">
//   <Container>
//     <Navbar.Brand href="#home">Movie Universe</Navbar.Brand>
//     <Nav className="ms-auto">
//       <NavLink to="/" className="text-white me-3 nav-link">
//         Home
//       </NavLink>
//
//     </Nav>
//   </Container>
// </Navbar>
