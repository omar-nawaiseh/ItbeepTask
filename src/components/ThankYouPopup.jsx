import { ButtonGroup, Modal, Button } from "react-bootstrap";
import "./Test.css";
import React, { useContext } from "react";
import { MainContect } from "../context/MainContext";

function ThankYouPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="bdy">
        <h2>
          Thank you for your submition. Check your email for further information
        </h2>
      </Modal.Body>

      <Modal.Footer className="footer">
        <button className="Button-Close" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ThankYouPopup;
