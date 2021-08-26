import React, { Component } from "react";
import NavbarComponen from "./NavbarComponen";
import Formulir from "./Formulir";
import Tabel from "./Tabel";
import Add_userskill from "./Add_userskill";
import App from "./App";

export default class Crud extends Component {
  render() {
    //console.log(this.state.makanans);
    return (
      <div>
        <NavbarComponen />
        <div className="container mt-4">
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <br></br>
          <Tabel
          // makanans={this.state.makanans}
          // editData={this.editData}
          // hapusData={this.hapusData}
          />
          {/* <App/> */}
          {/* <Add_userskill/> */}
        </div>
      </div>
    );
  }
}
