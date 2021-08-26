import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Add_userskill = ({
  Skill,
  Level,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit data" : "Add User Skill"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Skill">
              <Form.Label>Skill</Form.Label>
              <Form.Control
                type="text"
                name="Skill"
                value={Skill}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Group controlId="Level">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="text"
                name="Level"
                value={Level}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add new
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Add_userskill;
