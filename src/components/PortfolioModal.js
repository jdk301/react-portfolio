import { Modal, Button } from "react-bootstrap";
import React from "react";

function PortfolioModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>this is the body text wrapped in a p tag</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function MyModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        View
      </Button>

      <PortfolioModal
        animation="true"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}
