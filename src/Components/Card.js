import React from "react";

export const Card = (props) => {
  return (
    <div>
      <br />
      Card: <br />
      context[0] = {props.name}
      <br />
      context.obj.color: {props.obj.color}
    </div>
  );
};
