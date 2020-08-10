import React, { Component } from "react";
import Modal from "./Modal";
import "./Overlay.css";

export default class Overlay extends Component {
  constructor() {
    super();

    if (Overlay.instance) {
      return Overlay.instance;
    }

    this.state = {
      modal: null,
    };

    Overlay.instance = this;
  }

  modal() {
    if (this.state.modal) {
      return (
        <div className="Overlay">
          <Modal close={this.closeModal}>{this.state.modal}</Modal>
        </div>
      );
    }
    return null;
  }

  showModal(content) {
    this.setState({ modal: content });
  }

  closeModal = () => {
    this.setState({ modal: null });
  };

  render() {
    return <>{this.modal()}</>;
  }
}
