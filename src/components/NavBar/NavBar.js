import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { Navbar, Container, Nav, Button  } from 'react-bootstrap';
import {NavLink, useNavigate} from 'react-router-dom';


const NavBar = () => {
	const navigate = useNavigate()
	
	const handleClick = () =>{
		navigate('./login')
	}

	const handleAddQuote = () =>{
		navigate('./addquote')
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
		  <Button variant="light" onClick={handleClick} Navigate to='/login'>Log in</Button>
		  <Button variant="outline-light" className="mx-2" onClick={handleAddQuote}>Add Quote</Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
