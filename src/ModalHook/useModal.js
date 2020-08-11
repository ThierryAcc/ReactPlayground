import React from "react";
import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [component, setComponent] = useState(null);

  function toggle() {
    console.log("toggle");
    setIsShowing(!isShowing);
    console.log("useModal: " + isShowing);
  }

  function setModalComponent(component) {
    console.log(component);
    setComponent(component);
  }

  return {
    isShowing,
    toggle,
    component,
    setModalComponent,
  };
};

export default useModal;
