import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import { useStateContext } from "../../context/StateContext";

const NavBar = () => {
  const { userId, login, token, setToken, setUserId, setPopUps, popUps } =
    useStateContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    setPopUps(false);
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setToken(null);
    setUserId(null);
    navigate("/");
  };

  const handleAddQuote = () => {
    if (!login) {
      setPopUps(true);
      return;
    }
    navigate("./addquote");
  };

  const handleProfile = () => {
    navigate(`/profile/${userId}`);
  };

  return (
    <nav className="nav-bar">

      <p className="logo">Quotes</p>

      <div className="links">
        <NavLink to="/" className='link' >All Quotes </NavLink>
        <NavLink to="/lovequotes" className='link'>Love Quotes </NavLink>
        {" "}
        <NavLink to="/motivationalquotes" className='link'>Motivational Quotes </NavLink>
      </div>
	  
      <div className="buttons">
        {!login ? (
          <Button variant="light" onClick={handleLogin}>
            Log in
          </Button>
        ) : (
          <Button variant="danger" onClick={handleLogout}>
            Log out
          </Button>
        )}
     
        <Button
          variant="outline-light"
          className="mx-2"
          onClick={handleAddQuote}
        >
          Add Quote
        </Button>
        {login && (
          <FaUserCircle className="user-icon" onClick={handleProfile} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;

// <>
//       <Navbar bg="dark" variant="dark" className="py-3">
//         <Container>
//           <Navbar.Brand>Quotes</Navbar.Brand>
//           <Nav className="me-auto mx-auto navbar">

// 			  <NavLink to='/'>
//             	{/* <Nav.Link>All Quotes</Nav.Link> */}
// 				All Quotes
// 			  </NavLink>

// 			  <NavLink to='/lovequotes'>
//             	{/* <Nav.Link>Love Quotes</Nav.Link> */}
// 				Love Quotes
// 			  </NavLink>

// 			  <NavLink to='/motivationalquotes'>
//             	{/* <Nav.Link>Motivational Quotes</Nav.Link> */}
// 				Motivational Quotes
// 			  </NavLink>

//           </Nav>
// 		  {!login?  <Button variant="light" onClick={handleLogin}>Log in</Button>: <Button variant="danger" onClick={handleLogout}>Log out</Button>}

// 		  <Button variant="outline-light" className="mx-2" onClick={handleAddQuote}>Add Quote</Button>
// 		  {login && <FaUserCircle className="user-icon" onClick={handleProfile}/>}

//         </Container>
//       </Navbar>
//     </>
