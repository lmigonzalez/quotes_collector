import React from "react";

import "./AddQuote.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

const AddQuote = () => {
  return (
    <section className="form-section">
      <div className="form">
        <h1>Add New Quote</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Quote</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Author</Form.Label>
            <Form.Control type="email" placeholder="optional" />
          </Form.Group>

          <Form.Select aria-label="Default select example">
            <option>Categories</option>
            <option value="Love">Love</option>
            <option value="Motivational">Motivational</option>
          </Form.Select>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AddQuote;
