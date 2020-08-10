import React, { useContext } from "react";
import NameContext from "../Context/NameContext";
import { Card } from "./Card";
import { AdvancedContext } from "../Context/AdvancedContext";

// PASS THE DATA FROM A CONTAINER TO A SUB CONTAINER USING CONTEXT API
const Subcontainer = () => {
  const context = useContext(AdvancedContext);

  return (
    <div>
      Subcontainer: {context[0]}
      {<Card name={context[0]} obj={context.obj} />}
      {/* <AdvancedContext.Consumer>
        {({ name, obj }) => <Card name={context} obj={obj} />}
      </AdvancedContext.Consumer> */}
    </div>
  );
};

export default Subcontainer;
