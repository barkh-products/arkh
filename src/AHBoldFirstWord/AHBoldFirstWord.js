
import React from "react";
import { separateFirstWord } from "../utils";

type Props = {
    breaking?: boolean;
    input: string;
    style?: any;
}
export const AHBoldFirstWord = ({ input, style, breaking = true }: Props) => {
    const [first, other] = separateFirstWord(input);
    return (
      <label style={style}>
        <b>{first}</b>
        {breaking && <br />} {other}
      </label>
    );
  };