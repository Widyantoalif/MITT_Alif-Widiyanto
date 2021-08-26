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
          <h4>{id ? "Edit data" : "Add Master Skill Level"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Skill_Level_name">
              <Form.Label>Skill Name</Form.Label>
              <Form.Control
                type="text"
                name="Skill_Level_name"
                value={Skill}
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
