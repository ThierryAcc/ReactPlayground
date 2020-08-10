import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Project List...</h4>
        {this.props.someFunc(this.props.list)}
      </div>
    );
  }
}
