import React, { Component } from "react";

export default class DisplayEmployees extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.employees.map((e) => (
            <tr key={e}>
              <td>{e}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
