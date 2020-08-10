import React, { Component } from "react";

export default class Department extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: ["Dev", "Big Data", "Mobility"],
    };
  }

  render() {
    return (
      <div>
        <h4>Department List...</h4>
        {this.props.someFunc(this.state.departments)}
      </div>
    );
  }
}
