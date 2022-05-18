import React, {useState} from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import './SignUp.css';

const SignUp = () =>{

	const initialData = {
		name: '',
		email: '',
		password: '',

	}

	const [userData, setUserData] = useState(initialData)



	const handleSubmit = (e) =>{
		e.preventDefault();
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		const data = JSON.stringify(userData)

		axios.post('http://localhost:3000/api/user/register', data, config)
		.then(res=>{
			console.log(res)
		})
		.catch(err=>{
			console.log(err)
		})

	}

	const handleChange = (e) =>{
		setUserData({
			...userData, [e.target.name]: e.target.value
		})
		
	}




	return(
		<section className="form-section">
		<div className="form">
		  <h1>SignUp</h1>
		  <Form onSubmit={handleSubmit}>
		  <Form.Group className="mb-3" controlId="formBasicName">
			  <Form.Label>Name</Form.Label>
			  <Form.Control type="text" placeholder="Enter name" name="name" value={userData.name} onChange={handleChange}/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
			  <Form.Label>Email address</Form.Label>
			  <Form.Control type="email" placeholder="Enter email" name="email" value={userData.email} onChange={handleChange}/>
			</Form.Group>
  
			<Form.Group className="mb-3" controlId="formBasicPassword">
			  <Form.Label>Password</Form.Label>
			  <Form.Control type="password" placeholder="Password" name="password" value={userData.password} onChange={handleChange}/>
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