import React, { useState } from "react";
import { Wizard2 } from "./Wizard2";
import Modal from "./Modal";
import { ToRender } from "./ToRender";

export const AnotherLowLevelCompnent = () => {
  const [wizard, setWizard] = useState(null);

  return (
    <>
      <div>
        <button
          className="button-default"
          onClick={() =>
            setWizard(<Wizard2 closeModal={() => setWizard(null)} />)
          }
        >
          Click WIZARD2
        </button>
        <button
          className="button-default"
          onClick={() =>
            setWizard(<ToRender closeModal={() => setWizard(null)} />)
          }
        >
          Click TORENDER
        </button>
      </div>
      <Modal>{wizard}</Modal>
    </>
  );
};

export default AnotherLowLevelCompnent;
