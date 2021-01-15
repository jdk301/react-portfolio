import { Modal, Button } from "react-bootstrap";
import React from "react";
import { projectData } from "../data";

export default function MyModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <React.Fragment>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          View
        </Button>

        <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          animation="true"
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.name}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={props.image} width="300vw" height="250vh" />
            <p>{props.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <a target="_blank" href={props.github}>
              <Button>Github</Button>
            </a>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
}
