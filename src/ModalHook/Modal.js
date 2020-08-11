import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { Wizard } from "../Overlay/Wizard";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-wrapper" tabIndex={-1} role="dialog">
            <div className="modal">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <Wizard title={"I am the wizard"} closeOverlay={() => {}} />
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
