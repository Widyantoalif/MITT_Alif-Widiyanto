import React, { Component } from "react";

export default class Sublifecycle extends Component {
  componentWillUnmount() {
    this.props.ubahMakanan("Sate");
  }
  render() {
    return (
      <div>
        <h3>Component sub Lifecycle</h3>
      </div>
    );
  }
}
