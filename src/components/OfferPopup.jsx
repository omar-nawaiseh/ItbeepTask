import { ButtonGroup, Modal, Button } from "react-bootstrap";
import "./Test.css";
import React, { useContext } from "react";
import { MainContect } from "../context/MainContext";

function OfferPopup(props) {
  const { setOffers, setOfferPop, setDatepop } = useContext(MainContect);

  const handleClick = (e) => {
    setOffers(e.target.value);
  };
  const handleNext = () => {
    setOfferPop(false);
    setDatepop(true);
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
          <Button variant="primary" value="Offer 1">
            Offer 1
          </Button>
          <Button variant="primary" value="Offer 2">
            Offer 2
          </Button>
          <Button variant="primary" value="Offer 3">
            Offer 3
          </Button>
        </ButtonGroup>
        <Button
          onClick={handleNext}
          className="Next"
          block
          variant="primary"
          value="Offer 3"
        >
          Next
        </Button>
      </Modal.Body>

      <Modal.Footer className="footer">
        <button className="Button-Close" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default OfferPopup;
