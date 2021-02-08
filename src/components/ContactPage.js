import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactPage = () => (
  <section className="contact" id="contact">
    <h1 className="section-header">Connect</h1>

    <li className="social-links">
      <a href="https://github.com/jdk301" target="_blank">
        <img className="img-desc" src="/images/github.png" />
      </a>
    </li>

    <li className="social-links">
      <a href="https://www.linkedin.com/in/justin-kim-dc/" target="_blank">
        <img className="img-desc" src="/images/linkedin.png" />
      </a>
    </li>

    <li className="social-links">
      <a href="mailto: justinkim0710@gmail.com" target="_blank">
        <img className="img-desc" src="/images/email.png" />
      </a>
    </li>
  </section>
);

export default ContactPage;

// function ContactPage() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="section-header">
//         <h1 className="title">Connect</h1>
//       </div>

//       <li className="social-links">
//         <a href="https://github.com/jdk301" target="_blank">
//           <img className="img-desc" src="/images/github.png" />
//         </a>
//       </li>

//       <li className="social-links">
//         <a href="https://www.linkedin.com/in/justin-kim-dc/" target="_blank">
//           <img className="img-desc" src="/images/linkedin.png" />
//         </a>
//       </li>

//       {/* <div className="form-container">
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           <Form.Control
//             type="text"
//             id="name"
//             placeholder="Name"
//             // onChange={onInput}
//           />
//           <Form.Control
//             type="email"
//             id="email"
//             placeholder="Email"
//             // onChange={onInput}
//           />
//           <Form.Control
//             as="textarea"
//             placeholder="Your Message"
//             rows={3}
//             // onChange={onInput}
//           />
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div> */}
//     </section>
//   );
// }

// export default ContactPage;
