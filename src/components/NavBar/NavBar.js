import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { useStateContext } from "../../context/StateContext";

const NavBar = () => {
  const { userId, login, token, setToken, setUserId, setPopUps, popUps } =
    useStateContext();

  const navigate = useNavigate();

  const [menuActive, setMenuActive] = useState(false);

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

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav className="nav-bar">
        <p className="logo">Quotes</p>

        <div className="links">
          <NavLink to="/" className="link">
            All Quotes{" "}
          </NavLink>
          <NavLink to="/lovequotes" className="link">
            Love Quotes{" "}
          </NavLink>{" "}
          <NavLink to="/motivationalquotes" className="link">
            Motivational Quotes{" "}
          </NavLink>
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
            className="mx-2 add-quote"
            onClick={handleAddQuote}
          >
            Add Quote
          </Button>
          {login && (
            <FaUserCircle className="user-icon" onClick={handleProfile} />
          )}
        </div>
        <AiOutlineMenu className="mobile-hamburger-menu" onClick={toggleMenu} />
      </nav>

      {menuActive && (
        <div className="mobile-menu" onClick={toggleMenu}>
          <div className="menu-content">
            <p onClick={handleProfile} className="link link-p">
              Profile
            </p>
            <NavLink to="/" className="link">
              All Quotes{" "}
            </NavLink>
            <NavLink to="/lovequotes" className="link">
              Love Quotes{" "}
            </NavLink>{" "}
            <NavLink to="/motivationalquotes" className="link">
              Motivational Quotes{" "}
            </NavLink>
            <div className="mobile-buttons">
              {!login ? (
                <Button variant="light" onClick={handleLogin}>
                  Log in
                </Button>
              ) : (
                <Button variant="danger" onClick={handleLogout}>
                  Log out
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
