import React from "react";

const imgStyle = {
  width: 50,
  height: 50
};

export const AHYesButton = ({ onClick, disabled, isPositive, style}) =>
  isPositive === true ? (
    <img
      alt="positive activated"
      style={{...imgStyle, ...style}}
      onClick={function() {
        if (!disabled) {
          onClick(true);
        }
      }}
      src={require("./positive_selected.png")}
    />
  ) : (
    <img
      alt="positive unselected"
      style={{...imgStyle, ...style}}
      onClick={function() {
        if (!disabled) {
          onClick(true);
        }
      }}
      src={require("./positive_unselected.png")}
    />
  );

export const AHYesNoToggle = ({ isPositive, disabled, onClick, style }) => (
  <div
    style={{
      ...style,
      width: 140,
      display: "flex",
      justifyContent: "space-around",
      cursor: "pointer",
      opacity: disabled ? 0.7 : 1
    }}
  >
    {isPositive === true ? (
      <img
        alt="positive activated"
        style={imgStyle}
        onClick={function() {
          if (!disabled) {
            onClick(true);
          }
        }}
        src={require("./positive_selected.png")}
      />
    ) : (
      <img
        alt="positive unselected"
        style={imgStyle}
        onClick={function() {
          if (!disabled) {
            onClick(true);
          }
        }}
        src={require("./positive_unselected.png")}
      />
    )}
    {isPositive === false ? (
      <img
        alt="negative selected"
        style={imgStyle}
        onClick={function() {
          if (!disabled) {
            onClick(false);
          }
        }}
        src={require("./negative_selected.png")}
      />
    ) : (
      <img
        alt="negative unselected"
        style={imgStyle}
        onClick={function() {
          if (!disabled) {
            onClick(false);
          }
        }}
        src={require("./negative_unselected.png")}
      />
    )}
  </div>
);
