import React from "react";

type Props = {
  query: string;
  input: string;
  style?: any;
}
export const AHBoldQuery = ({ query, input, style }: Props) => {
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

