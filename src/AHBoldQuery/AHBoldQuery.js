import React from "react";

export const AHBoldQuery = ({ query, input, style }) => {
  const startIndex = input.toLowerCase().indexOf(query.toLowerCase());

  const strBefore = startIndex >= 0 ? input.slice(0, startIndex) : input;
  const middleString =
    startIndex >= 0 ? input.slice(startIndex, startIndex + query.length) : "";
  const strAfter =
    startIndex >= 0 ? input.slice(startIndex + query.length) : "";

  return (
    <label style={style}>
      {strBefore}
      <b>
        {middleString}
      </b>
      {strAfter}
    </label>
  );
};

export const separateFirstWord = input => {
  const parts = (input ? input : "").split(" ");
  return [
    parts.length > 0 ? parts[0] : "",
    parts.slice(1).reduce((prev, curr) => prev + " " + curr, "")
  ];
};
export const AHBoldFirstWord = ({ input, style, breaking = true }) => {
  const [first, other] = separateFirstWord(input);
  return (
    <label style={style}>
      <b>{first}</b>
      {breaking && <br />} {other}
    </label>
  );
};
