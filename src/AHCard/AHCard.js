import React from "react";

export const AHCard = props =>
  <div
    style={{
      background: "#FFF",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px",
      borderRadius: '3px',
      ...props.style
    }}
    onClick={props.onClick}
  >{props.children}</div>;
