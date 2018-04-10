import React from "react";
import { withTheme } from "../AHTheme/AHTheme";
import Color from "color";
const AHAppUnthemed = props =>
  <div
    style={Object.assign(
      {},
      {
        minHeight: "100%",
        background: Color(props.theme.baseColor).darken(0.05).hexString()
      },
      props.style
    )}
    children={props.children}
  />;

export const AHApp = withTheme(AHAppUnthemed);
