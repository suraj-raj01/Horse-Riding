import {Outlet,Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout = () =>{
    return(
        <>
        <Navbar expand="lg" style={{height:'10vh'}}>
          <Container fluid>
            <Navbar.Brand href="#" style={{fontWeight:'bold'}}>HorseRiding</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '400px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to="home">Home</Nav.Link>
                <Nav.Link as={Link} to="bookride">Book Ride</Nav.Link>
                <Nav.Link as={Link} to="bookform">Book Form</Nav.Link>
                <Nav.Link as={Link} to="about">About</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
            <Outlet/>
        </div>
        </>
    )
}
export default Layout;