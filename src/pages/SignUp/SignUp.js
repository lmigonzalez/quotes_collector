import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import './SignUp.css';

const SignUp = () =>{


	const handleSubmit = (e) =>{
		e.preventDefault();
	}


	return(
		<section className="form-section">
		<div className="form">
		  <h1>SignUp</h1>
		  <Form onSubmit={handleSubmit}>
		  <Form.Group className="mb-3" controlId="formBasicName">
			  <Form.Label>Name</Form.Label>
			  <Form.Control type="text" placeholder="Enter name" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
			  <Form.Label>Email address</Form.Label>
			  <Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
  
			<Form.Group className="mb-3" controlId="formBasicPassword">
			  <Form.Label>Password</Form.Label>
			  <Form.Control type="password" placeholder="Password" />
			</Form.Group>
		
			<Button variant="primary" type="submit">
			  Submit
			</Button>
		  </Form>
		  <div className="register">
			<p>Already have an account?</p>
			<Link to="/login">&nbsp;Sign in</Link>
		  </div>
		</div>
	  </section>
	)
}


export default SignUp;