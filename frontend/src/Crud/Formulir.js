import React from "react";
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({
  Name,
  Address,
  Bod,
  Email,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit data" : "Add new"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Skill</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={Name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            {/* <Form.Group controlId="Address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="Address"
                value={Address}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="Bod">
              <Form.Label>Bod</Form.Label>
              <Form.Control
                type="date"
                name="Bod"
                value={Bod}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="Email"
                value={Email}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Add new
            </Button>

            {/* <div>
              <Link className="center" to="/Add_userskill">
                <Button variant="primary" type="submit">
              Add new
            </Button>
            </Link>
            </div> */}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
