import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Add_master_skil_level = ({
  Skill_name,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit data" : "Register"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                value={Name}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="Address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="Address"
                value={Address}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="Bod">
              <Form.Label>Birth Of Date</Form.Label>
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
                value={Address}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Add_master_skil_level;
