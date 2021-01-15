import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ContactPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section id="contactPage" className="contact">
      <div className="section-header">
        <h1 className="title">Contact</h1>
      </div>

      <div className="form-container">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            id="name"
            placeholder="Name"
            // onChange={onInput}
          />
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            // onChange={onInput}
          />
          <Form.Control
            as="textarea"
            placeholder="Your Message"
            rows={3}
            // onChange={onInput}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default ContactPage;
