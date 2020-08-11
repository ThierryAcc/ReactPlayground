import React, { Component } from "react";
import "./OnlyOverlay.css";

export default class OnlyOverlay extends Component {
  constructor(props) {
    super(props);

    console.log(OnlyOverlay);
    console.log(typeof OnlyOverlay);
    console.log(OnlyOverlay.instance);
    console.log(typeof OnlyOverlay.instance);

    if (OnlyOverlay.instance) {
      return OnlyOverlay.instance;
    }

    this.state = {
      component: null,
    };

    OnlyOverlay.instance = this;
  }

  renderComponent() {
    if (this.state.component) {
      return <div className="OnlyOverlay">{this.state.component}</div>;
    }
    return null;
  }

  showComponent(component) {
    this.setState({ component: component });
  }

  closeComponent = () => {
    this.setState({ component: null });
  };

  render() {
    return <>{this.renderComponent()}</>;
  }
}
