import React, {useState} from "react";
import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./EditQuote.css";
import { Form, Button } from "react-bootstrap";

const EditQuote = ({quoteToUpdate}) => {

  const params = useParams()
  console.log(quoteToUpdate)


  const initialData = {
	  quote: quoteToUpdate.quote,
	  author: quoteToUpdate.author ? quoteToUpdate.author: 'unknown',
    categories: quoteToUpdate.categories ?quoteToUpdate.categories: 'Love',
	}

	const [quoteData, setQuoteData] = useState(initialData)




	// const handleSubmit = (e) =>{
	// 	e.preventDefault();

    // if(!token){
    //   console.log('no token!!!, login to get a new token')
    // }

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
      
  
	// 	const data = JSON.stringify(quoteData)

	// 	axios.post('http://localhost:3000/api/quote/post', data, config)
	// 	.then(res=>{
	// 		console.log(res)
	// 	})
	// 	.catch(err=>{
	// 		console.log(err)
	// 	})

	// }

	const handleChange = (e) =>{
		setQuoteData({
			...quoteData, [e.target.name]: e.target.value
		})

	}


  return (
    <section className="form-section">
      <div className="form">
        <h1>Add New Quote</h1>
        <Form >
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
        </Form>
      </div>
    </section>
  );
};

export default EditQuote;
