import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ children }) => {
  return children
    ? ReactDOM.createPortal(
        <>
          <div className="modal-wrapper" tabIndex={-1} role="dialog">
            <div className="modal">{children}</div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default Modal;
