import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Movie Universe</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/" className="text-white me-3 nav-link">
            Home
          </NavLink>
          <NavLink to="/booked-movies" className="text-white nav-link">
            Booked Movies
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
