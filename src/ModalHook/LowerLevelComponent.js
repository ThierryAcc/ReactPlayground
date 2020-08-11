import React from "react";
import useModal from "./useModal";
import Modal from "./Modal";

export const LowerLevelComponent = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <div>
        <button className="button-default" onClick={toggle}>
          Click
        </button>
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default LowerLevelComponent;
