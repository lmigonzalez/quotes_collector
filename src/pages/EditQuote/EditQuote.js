import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./EditQuote.css";
import { Form, Button } from "react-bootstrap";
import { useStateContext } from "../../context/StateContext";

const EditQuote = () => {
  const navigate = useNavigate();

  const { quoteToUpdate, token, setNotification, setPopUpMsg, closePopUp, backendUrl } = useStateContext();


    useEffect(()=>{
      checkIfToken()

    }, [])
 

  function checkIfToken() {
    console.log("from useEffect");
    if (quoteToUpdate == null) {
      navigate('/')
    }
  };




  let quoteToUpdateId;
  if (quoteToUpdate) {
    quoteToUpdateId = quoteToUpdate._id;
  }

  const initialData = {
    quote: quoteToUpdate.quote,
    author: quoteToUpdate.author ? quoteToUpdate.author : "unknown",
    categories: quoteToUpdate.categories ? quoteToUpdate.categories : "Love",
  };

  const [quoteData, setQuoteData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      setPopUpMsg("Oops, something happened, try again");
      setNotification(true);
      closePopUp();
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (!quoteData.quote.length) {
      setPopUpMsg("quote cannot be empty");
      setNotification(true);
      closePopUp();
      return;
    }

    // const data = JSON.stringify(quoteData)

    axios
      .patch(
        `${backendUrl}/api/quote/update/${quoteToUpdateId}`,
        quoteData,
        config
      )
      .then(() => {
        setPopUpMsg("quote edited successfully");
        setNotification(true);
        closePopUp();
        navigate(-1);
      })
      .catch(() => {
        setPopUpMsg("Oops, your quote was not edited");
        setNotification(true);
        closePopUp();
      });
  };

  const handleChange = (e) => {
    setQuoteData({
      ...quoteData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <section className="form-section">
      <div className="form">
        <h1>Update Quote</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Quote</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter your quote here..."
              rows={3}
              name="quote"
              value={quoteData.quote}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="author"
              value={quoteData.author}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            name="categories"
            value={quoteData.categories}
            onChange={handleChange}
          >
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
