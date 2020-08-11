import React from "react";
import useModal from "./useModal";
import Modal from "./Modal";

export const ToRender = ({ closeModal }) => {
  return (
    <>
      <div>
        <button
          type="button"
          className="modal-close-button"
          data-dismiss="modal"
          onClick={closeModal}
        >
          X
        </button>
        TO RENDER FUNCTION CLOSE ME
      </div>
    </>
  );
};
