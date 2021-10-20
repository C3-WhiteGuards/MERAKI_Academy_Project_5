import { Login } from "../auth/login";
import React ,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { useHistory } from "react-router";

const Navigation = () => {
  const state =useSelector((state) => {
    return {
      token: state.token.token,
    };
  });
  const token = localStorage.getItem("token");
  const [imageUser , setImageUser] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setImageUser(result.data[0]);
        console.log("abduallah",result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("token",state.token);
 const history = useHistory();
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
              <Nav.Link href="/review">Review</Nav.Link>
              <NavDropdown title="Our Sections" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/AllTrainers">
                <Link to="/AllTrainers" style={{textDecoration: "none" , color:"gray"}}>Trainers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/ALLGyms">
                <Link to="/ALLGyms" style={{textDecoration: "none" , color:"gray" }}>GYMs</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/AllRestaurnats">
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

              <Nav.Link href="/review">Review</Nav.Link>
              <NavDropdown title="Our Sections" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/AllTrainers">
                <Link to="/AllTrainers" style={{textDecoration: "none", color:"gray" }}>Trainers</Link>
                </NavDropdown.Item>             
                <NavDropdown.Item href="/ALLGyms">
                <Link to="/ALLGyms" style={{textDecoration: "none" , color:"gray"}}>GYMs</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/AllRestaurnats" >
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
          {console.log("Rashed",imageUser)}
        </Container> {imageUser && imageUser.image !==null?(<Image onClick={(e)=>history.push('/profile')} src={imageUser && imageUser.image} width="35px" height="35px" style={{borderRadius:"100%" , marginRight:"25px"  , border:"solid gray 1px" , cursor:"pointer"}} />):(<Image onClick={(e)=>history.push('/profile')} src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" width="35px" height="35px" style={{borderRadius:"100%" , marginRight:"25px"  , border:"solid gray 1px" , cursor:"pointer"}} />)}
        
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
