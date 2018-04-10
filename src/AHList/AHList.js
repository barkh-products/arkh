// @flow

import React from "react";
import styles from "./AHList.css";
import { withTheme, AHThemeType } from "../AHTheme/AHTheme";
import Color from "color";


type Props = {
  theme: AHThemeType,
  style: CSSStyleDeclaration
};

const AHListUnthemed = (props: Props) => (
  <ul
    className={styles.list}
    style={Object.assign(
      {},
      {
        borderTop:
          "1px solid " +
          Color(props.theme.baseColor)
            .darken(0.1)
            .hexString()
      },
      props.style
    )}
  >
    {props.children}
  </ul>
);
export const AHList = withTheme(AHListUnthemed);
