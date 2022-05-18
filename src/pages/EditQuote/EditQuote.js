import React, {useState} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./EditQuote.css";
import { Form, Button } from "react-bootstrap";

const EditQuote = ({quoteToUpdate, token}) => {

  const navigate = useNavigate()
  const quoteToUpdateId = quoteToUpdate._id
  // console.log(quoteToUpdateId)



  const initialData = {
	  quote: quoteToUpdate.quote,
	  author: quoteToUpdate.author ? quoteToUpdate.author: 'unknown',
    categories: quoteToUpdate.categories ? quoteToUpdate.categories: 'Love',
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

		axios.patch(`http://localhost:3000/api/quote/update/${quoteToUpdateId}`, quoteData, config)
		.then(res=>{
			console.log(res)
      navigate(-1)
		})
		.catch(err=>{
			console.log(err)
		})

	}

	const handleChange = (e) =>{
		setQuoteData({
			...quoteData, [e.target.name]: e.target.value
		})

	}

  const handleCancel = () =>{
    navigate(-1)
  }


  return (
    <section className="form-section">
      <div className="form">
        <h1>Update Quote</h1>
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
            Update
          </Button>
          <Button variant="danger" onClick={handleCancel}>
          Cancel
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default EditQuote;
