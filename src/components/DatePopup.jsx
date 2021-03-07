import { ButtonGroup, Modal, Button } from "react-bootstrap";
import "./Test.css";
import React, { useContext } from "react";
import { MainContect } from "../context/MainContext";

function DatePopup(props) {
  const { setDates, setDatepop, setThankPop } = useContext(MainContect);

  const handleClick = (e) => {
    setDates(e.target.value);
    setDatepop(false);
    setThankPop(true);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="bdy">
        <ButtonGroup className="btns" onClick={handleClick}>
          <Button variant="primary" value="Date 1">
            Date 1
          </Button>
          <Button variant="primary" value="Date 2">
            Date 2
          </Button>
          <Button variant="primary" value="Date 3">
            Date 3
          </Button>
        </ButtonGroup>
      </Modal.Body>

      <Modal.Footer className="footer">
        <button className="Button-Close" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default DatePopup;
