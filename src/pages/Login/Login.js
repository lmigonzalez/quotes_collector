import React, {useState} from "react";
import axios from "axios";

import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";


const Login = (props) => {
  const {setToken, setUserId } = props

  const navigate = useNavigate()

  const initialData = {
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

		axios.post('http://localhost:3000/api/user/login', data, config)
		.then(res=>{
			console.log(res)
	
      setToken(res.data.token)
      setUserId(res.data.user.id)
      navigate('/')
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




  return (
    <section className="form-section">
      <div className="form">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
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
          <p>Not a member?</p>
          <Link to="/signup">&nbsp;Create Account</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;