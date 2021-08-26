import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Row, Col, Form, Button } from "react-bootstrap";
// import axios from 'axios';

class App_Skill extends Component{
  constructor(props){
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      DataSkill : [],
      isLoaded  : false,
      
      skillId   : '',
      skillName : '',
    }
  }

  componentDidMount(){
    // this.fetchData();
    fetch('https://localhost:5001/api/Skill/GetSkills')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded     : true,
        DataSkill    : json,
      })
    })
  }
  
}

const Tabel = ({ Skill, editData, hapusData }) => {
  return (
     
    <Table striped bordered hover>
     <div>
            <Button variant="primary" type="submit">
              Add new
            </Button>
      </div>
      <thead>
        <tr>
          <th>No</th>
          <th>Skill ID</th>
          <th>Skill Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Skills.map((Skill, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{Skill.Skill}</td>
              <td>{Skill.Level}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => editData(Skill.id)}
                >
                  edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => hapusData(Skill.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
