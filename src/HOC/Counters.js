import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default class Counters extends Component {
  render() {
    return (
      <div>
        <hr />
        <h4>Counters</h4>
        {/* no props here when using HOC */}
        <ClickCounter more={{ city: "umiken", zip: 5222 }} />
        <HoverCounter />
      </div>
    );
  }
}
