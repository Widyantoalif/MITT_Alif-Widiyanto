import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Row, Col, Form, Button } from "react-bootstrap";
class Tabel extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      DataSkill: [],
      isLoaded: false,

      skillID: "",
      skillName: "",
    };
  }

  componentDidMount() {
    const apiUrl = "https://localhost:5001/api/Skill/GetSkills";

    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result");
          this.setState({
            DataSkill: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteSkill = (skill_id) => {
    const { app_skills } = this.state;
    const apiUrl =
      "https://localhost:5001/api/Skill/Delete?idSkill=" + skill_id;
    const options = {
      method: "DELETE",
    };

    fetch(apiUrl, options);
    const newapp_skill = app_skills
      .filter((app_skills) => app_skills.skillId !== skill_id)
      .map((filterapp_skill) => {});

    this.setState({
      app_skills: newapp_skill,
    });
    window.location.reload();
  };

  render() {
    var { isLoaded, DataSkill } = this.state;

    {
      return (
        <div className="App">
          <table className="table">
            <thead>
              <tr>
                <th>Skill ID</th>
                <th>Skill Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {DataSkill.map((data) => (
                <tr key={data.skillId}>
                  <td>{data.skillId}</td>
                  <td>{data.skillName}</td>
                  <td>
                    <td>
                      {/* <Button variant="info" onClick={() => this.props.editProduct(product.id)}>Edit</Button> */}
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => this.deleteSkill(data.skillId)}
                      >
                        Delete
                      </Button>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

// const data = ({ Skill, editData, hapusData }) => {
//   return (
//     <div></div>
//     // <Table striped bordered hover>
//     //   <thead>
//     //     <tr>
//     //       <th>No</th>
//     //     </tr>
//     //   </thead>
//     //   <tbody>
//     //     {/* {Skills.map((Skill, index) => {
//     //       return (
//     //         <tr key={index}>
//     //           <td>{index + 1}</td>
//     //           <td>{Skill.Skill}</td>
//     //           <td>{Skill.Level}</td>
//     //           <td>
//     //             <button
//     //               className="btn btn-warning mr-2"
//     //               onClick={() => editData(Skill.id)}
//     //             >
//     //               edit
//     //             </button>
//     //             <button
//     //               className="btn btn-danger"
//     //               onClick={() => hapusData(Skill.id)}
//     //             >
//     //               Hapus
//     //             </button>
//     //           </td>
//     //         </tr>
//     //       );
//     //     })} */}
//     //   </tbody>
//     // </Table>
//   );
// };

export default Tabel;
