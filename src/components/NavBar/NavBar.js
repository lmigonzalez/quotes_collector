import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { Navbar, Container, Nav, Button  } from 'react-bootstrap';
import {NavLink, useNavigate} from 'react-router-dom';
import {FaUserCircle} from "react-icons/fa";


const NavBar = ({userId}) => {
	const navigate = useNavigate()
	
	const handleLogin = () =>{
		navigate('./login')
	}

	const handleAddQuote = () =>{
		navigate('./addquote')
	}

	const handleProfile = () =>{
		navigate(`/profile/${userId}`)
	}



  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand>Quotes</Navbar.Brand>
          <Nav className="me-auto mx-auto navbar">

			  <NavLink to='/'>
            	{/* <Nav.Link>All Quotes</Nav.Link> */}
				All Quotes
			  </NavLink>

			  <NavLink to='/lovequotes'>
            	{/* <Nav.Link>Love Quotes</Nav.Link> */}
				Love Quotes
			  </NavLink>

			  <NavLink to='/motivationalquotes'>
            	{/* <Nav.Link>Motivational Quotes</Nav.Link> */}
				Motivational Quotes
			  </NavLink>
			  
          </Nav>
		  <Button variant="light" onClick={handleLogin}>Log in</Button>
		  <Button variant="outline-light" className="mx-2" onClick={handleAddQuote}>Add Quote</Button>
		  <FaUserCircle className="user-icon" onClick={handleProfile}/>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
