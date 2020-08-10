import React from "react";
import OnlyOverlay from "./OnlyOverlay";
import Overlay from "./Overlay";
import { Wizard } from "./Wizard";

export const OverlayUser = () => {
  const openModal = () => {
    const overlayAPI = new Overlay();
    overlayAPI.showModal(<div>ProcessWizard for modal</div>);
  };

  const openModalOverlay = () => {
    const component = <Wizard title={"Process"} />;
    const overlayAPI = new OnlyOverlay();
    overlayAPI.showComponent(component);
  };

  return (
    <>
      <div>
        <div>Hello I am a subcomponent trying to open the Modal.</div>
        <button onClick={openModal}>Open Modal</button>
      </div>

      <div>
        <div>Hello I am a subcomponent trying to open the Overlay.</div>
        <button onClick={openModalOverlay}>Open Overlay</button>
      </div>
    </>
  );
};
