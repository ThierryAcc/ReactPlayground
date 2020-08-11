import React from "react";
import useModal from "./useModal";
import Modal from "./Modal";

export const Wizard2 = ({ closeModal }) => {
  return (
    <>
      <div>
        <button
          type="button"
          className="modal-close-button"
          data-dismiss="modal"
          onClick={closeModal}
        >
          HIT ME
        </button>
        WIZARD!
      </div>
    </>
  );
};
