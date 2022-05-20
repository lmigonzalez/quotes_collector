import React, {useState} from "react";
import axios from "axios";

import "./AddQuote.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { useStateContext } from "../../context/StateContext";

const AddQuote = () => {

  const {token, userId, setPopUps, setNotification, setPopUpMsg, closePopUp, setLiked, liked} = useStateContext()


  const navigator = useNavigate()

  const initialData = {
		quote: '',
	  author: '',
    categories: 'Motivational',
    userId: userId,

	}

	const [quoteData, setQuoteData] = useState(initialData)




	const handleSubmit = (e) =>{
		e.preventDefault();

    if(!token){
      console.log('no token!!!, login to get a new token')
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
      
  
		const data = JSON.stringify(quoteData)
    console.log(data)

		axios.post('http://localhost:3000/api/quote/post', data, config)
		.then(res=>{
			console.log(res)
      setPopUpMsg('Quote created successfully')
      setNotification(true)
      closePopUp()
      setLiked(!liked)
      navigator('/')
		})
		.catch(err=>{
			console.log(err)
      setPopUpMsg("Ups, we couldn't create the quote!")
      setNotification(true)
      closePopUp()
		})

	}

	const handleChange = (e) =>{
		setQuoteData({
			...quoteData, [e.target.name]: e.target.value
		})

	}

  const handleCancel = () =>{
    navigator('/')
  }


  return (
    <section className="form-section">
      <div className="form">
        <h1>Add New Quote</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Quote</Form.Label>
            <Form.Control as="textarea" placeholder="Enter your quote here..." rows={3} name="quote" value={quoteData.quote} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="optional" name="author" value={quoteData.author} onChange={handleChange}/>
          </Form.Group>

          <Form.Select aria-label="Default select example" name="categories" value={quoteData.categories} onChange={handleChange}>
            <option>Categories</option>
            <option value="Love">Love</option>
            <option value="Motivational">Motivational</option>
          </Form.Select>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={handleCancel}>
          Cancel
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AddQuote;
