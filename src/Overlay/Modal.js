import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="Modal">
      <div onClick={() => props.close()} className="Modal-close-btn">
        x
      </div>
      Modal Childrens:
      {props.children}
    </div>
  );
};

export default Modal;
