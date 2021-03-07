import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { MainContect } from '../context/MainContext';
import './MainForm.css';
import OfferPopup from './OfferPopup';
import DatePopup from './DatePopup';
import ThankYouPopup from './ThankYouPopup';
function MainForm() {
  const {
    setFormData,
    FormData,
    offerPop,
    setOfferPop,
    closeOffer,
    datePop,
    closeDate,
    ThankPop,
    closeThanks,
  } = useContext(MainContect);

  const fontSub = (e) => {
    const { name, phone, email } = FormData;
    e.preventDefault();
    if (name && phone && email) {
      setOfferPop(true);
    }
  };
  return (
    <Container>
      <Row>
        <Col
          className='col-12'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <div className='Form__contain'>
            <h1
              style={{
                color: '#D14615',
                textShadow: '1px 1px 5px rgba(0,0,0, 0.5)',
              }}
            >
              Sign up
            </h1>
            <Form onSubmit={fontSub}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  onChange={(e) => {
                    setFormData({ ...FormData, name: e.target.value });
                  }}
                  value={FormData.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type='tel'
                  onChange={(e) => {
                    setFormData({ ...FormData, phone: e.target.value });
                  }}
                  value={FormData.phone}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  onChange={(e) => {
                    setFormData({ ...FormData, email: e.target.value });
                  }}
                  value={FormData.email}
                />
              </Form.Group>

              <Button block variant='primary' type='submit'>
                Send
              </Button>
            </Form>
            <OfferPopup show={offerPop} onHide={closeOffer} />
            <DatePopup show={datePop} onHide={closeDate} />
            <ThankYouPopup show={ThankPop} onHide={closeThanks} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainForm;
