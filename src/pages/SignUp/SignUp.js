import React, {useState} from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";

import './SignUp.css';

const SignUp = () =>{


	const { setNotification, setPopUpMsg, closePopUp, backendUrl } = useStateContext()

	const navigate = useNavigate()

	const initialData = {
		name: '',
		email: '',
		password: '',
		

	}

	const initialErrorMsg = {
		name: '',
		email: '',
		password: '',
		

	}


	
	const [userData, setUserData] = useState(initialData)
	const [error, setError] = useState(initialErrorMsg)
	// const [disableBtn, setDisableBtn] = useState(true)


	const inputErrorHandler = (e) => {

	
	
		if(e.target.name === 'name'){
			if(!e.target.value.trim().length){
				setError({...error, name: '', })
			
			}else if(e.target.value.trim().length < 3){
				setError({...error, name: 'name is too short'})
			

			}else if(e.target.value.trim().length >= 20){
				setError({...error, name: 'name is too long'})
			
			}else{
				setError({...error, name: ''})
		
		
			}
			return
		}

		if(e.target.name === 'email'){
			if(e.target.value.trim().length > 1 && !e.target.value.includes('@')){
				setError({...error, email: 'enter a valid email'})
				
			}else{
				setError({...error, email: ''})
			
			}
			return
		}

		if(e.target.name === 'password'){
			if(e.target.value.trim().length < 6 && e.target.value.trim().length > 0){
				setError({...error, password: 'password is too weak'})
				
			}else{
				setError({...error, password: ''})
			
		
			}
			return
		}

	
		
	}

	// console.log(disableBtn)

	

	const handleSubmit = (e) =>{
		e.preventDefault();

		// if(userData.name.length < 3 || userData.name.length >= 20 || userData.email.length < 5 || !userData.email.includes('@') || userData.password < 6){

		// 	console.log('all ')

		// }
	

			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}
	
			const data = JSON.stringify(userData)
	
			axios.post(`${backendUrl}/api/user/register`, data, config)
			.then(()=>{
				setPopUpMsg('successfully registered')
				setNotification(true)
				closePopUp()
				navigate('/login')
			})
			.catch(()=>{
				setPopUpMsg('Oops, something happened, check that your information is valid')
				setNotification(true)
				closePopUp()
			})
	
	
		
	}


	const handleChange = (e) =>{
		setUserData({
			...userData, [e.target.name]: e.target.value
		})
		inputErrorHandler(e)
		
	}

	const handleCancel = () =>{
		navigate('/')
	  }




	return(
		<section className="form-section">
		<div className="form">
		  <h1>SignUp</h1>
		  <Form onSubmit={handleSubmit}>
		  <Form.Group className="mb-3" controlId="formBasicName">
			  <Form.Label>Name</Form.Label>
			  <Form.Control type="text" placeholder="Enter name" name="name" value={userData.name} onChange={handleChange} maxLength='20'/>
			  <p className="form-error">{error.name}</p>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
			  <Form.Label>Email address</Form.Label>
			  <Form.Control type="email" placeholder="Enter email" name="email" value={userData.email} onChange={handleChange}/>
			  <p className="form-error">{error.email}</p>
			</Form.Group>
  
			<Form.Group className="mb-3" controlId="formBasicPassword">
			  <Form.Label>Password</Form.Label>
			  <Form.Control type="password" placeholder="Password" name="password" value={userData.password} onChange={handleChange}/>
			  <p className="form-error">{error.password}</p>
			</Form.Group>
			<Button variant="primary" type="submit" >
			  Submit
			</Button>
			<Button variant="danger" onClick={handleCancel}>
          Cancel
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