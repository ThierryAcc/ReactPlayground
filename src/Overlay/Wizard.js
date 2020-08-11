import React from "react";

export const Wizard = ({ title, closeOverlay }) => {
  const close = () => {
    closeOverlay();
  };

  return (
    <div>
      Wizard {title}
      <button onClick={close}>Close me</button>
    </div>
  );
};
