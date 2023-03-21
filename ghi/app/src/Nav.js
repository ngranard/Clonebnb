import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

function AppNav({ empty = false }) {
  const { rentalId, bookingId } = useParams();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const logged = localStorage.getItem('userLoggedIn');
    setUserLoggedIn(logged || false);
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    const logged = localStorage.getItem('userLoggedIn');
    setUserLoggedIn(logged || false);
  }, [navigate]);

  const cleanLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => {
            cleanLocalStorage();
            navigate('/');
          }}
        >
          <img
            src="https://i.imgur.com/tozS9eM.png"
            // src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
            className="img-fluid"
            width="100px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {true && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-between">
              <Nav.Link
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Home
              </Nav.Link>

              {/* <NavDropdown title="Bookings" id="basic-nav-dropdown">
                <NavDropdown.Item href={`/bookings/${bookingId}`}>
                  Booking Details
                </NavDropdown.Item>
                <NavDropdown.Item href={`/bookings`}>Bookings</NavDropdown.Item>
                <NavDropdown.Item href={`/bookings/new`}>
                  Create Booking
                </NavDropdown.Item>
              </NavDropdown> */}
              {userLoggedIn && (
                <Nav.Link
                  className="nav-link active"
                  aria-current="page"
                  href="/rentals"
                >
                  Places
                </Nav.Link>
              )}
              {!userLoggedIn && (
                <NavDropdown title="Users" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/users/signup">
                    Sign Up
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/users/login"
                    // onClick={() => {
                    //   localStorage.setItem('userLoggedIn', true);
                    //   setUserLoggedIn(true);
                    //   navigate('/rentals');
                    // }}
                  >
                    Sign In
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {userLoggedIn && (
                <Nav.Link
                  onClick={() => {
                    cleanLocalStorage();
                    setUserLoggedIn(false);
                  }}
                >
                  Sign out
                </Nav.Link>
              )}
              {/* <NavDropdown title="Rentals" id="basic-nav-dropdown">
                <NavDropdown.Item href={`/rentals/${rentalId}`}>
                  Rental Details
                </NavDropdown.Item>
                <NavDropdown.Item href={`/rentals`}>Rentals</NavDropdown.Item>
                <NavDropdown.Item href={`/rentals/new`}>
                  Create Rental
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href={`/rentals/${rentalId}/map`}>
                  Rental Map
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        )}
        {!userLoggedIn && (
          <div className="d-flex align-items-center">
            <div className="me-4" style={{ fontWeight: 700 }}>
              Ready to Airbnb it?
            </div>
            <Button variant="danger">Airbnb Setup</Button>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default AppNav;
