import { Login } from "../auth/login";
import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Navigation = () => {
  const state =useSelector((state) => {
    return {
      token: state.token.token,
    };
  });

  console.log("token",state.token);

  return (
   <>
      {!state.token ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{height:"80px"}}>
        <Container>
          <Navbar.Brand >
          <Link to="/home">      
            <Image className="logo" src="/image.png" width="45%" height="45%" />
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Our Sections" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                <Link to="/AllTrainers" style={{textDecoration: "none" , color:"gray"}}>Trainers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                <Link to="/ALLGyms" style={{textDecoration: "none" , color:"gray" }}>GYMs</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                <Link to="/AllRestaurnats" style={{textDecoration: "none" , color:"gray"}}>Restaurants</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{height:"80px"}}>
        <Container>
          <Navbar.Brand>
            <Image className="logo" src="/image.png" width="45%" height="45%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Our Sections" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                <Link to="/AllTrainers" style={{textDecoration: "none", color:"gray" }}>Trainers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                <Link to="/ALLGyms" style={{textDecoration: "none" , color:"gray"}}>GYMs</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                <Link to="/AllRestaurnats" style={{textDecoration: "none" , color:"gray"}}>Restaurants</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/logout">Logout</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
