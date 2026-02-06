import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className='nav-name'>ALI RAZA PATEL</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav-link'>HELLO</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>DESIGN</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>PHOTOS</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>PRICING</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>HIRE ME</Nav.Link>
            <Button variant="light" className='text-color shadow ms-2 button-white'>Say Hello</Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
