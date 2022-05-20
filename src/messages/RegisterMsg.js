import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

import {TiDelete} from "react-icons/ti"

import "./RegisterMsg.css";

function RegisterMsg() {
  const { setPopUps } = useStateContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    setPopUps(false);
  };

  const handleLogout = () => {
    navigate("/signup");
    setPopUps(false);
  };

  const closePopUp = () =>{
	setPopUps(false);
  }

  return (
    <section className="msg-container" onClick={closePopUp}>
      <div className="msg-body">
		<TiDelete className="closeBtn"/>
        <div className="msg-text">
          <p>You need to log in to be able to interact with this site</p>
        </div>
        <div className="action-container">
          <Button variant="primary" onClick={handleLogin}>
            Log in
          </Button>
          <Button variant="outline-primary" onClick={handleLogout}>
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RegisterMsg;
