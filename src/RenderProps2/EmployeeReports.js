import React, { Component } from "react";

export default class EmployeeReports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: ["Thierry", "Alain", "Laurent"],
    };
  }

  render() {
    return (
      <div>
        <h4>Employee Report</h4>
        {this.props.content(this.state.employees)}
      </div>
    );
  }
}
