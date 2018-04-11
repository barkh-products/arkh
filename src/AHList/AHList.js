// @flow

import React from "react";
import { withTheme, AHThemeType } from "../AHTheme/AHTheme";
import Color from "color";
import styled from "styled-components";




type Props = {
  theme: AHThemeType,
  style: CSSStyleDeclaration
};

const List = withTheme(styled.ul `
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 0;
    border-top: ${props => "1px solid " +
    Color(props.theme.baseColor)
      .darken(0.1)
      .hexString()};
          
    @media print{

          display: block;
          height: auto !important;
          margin: 0;

  }
    `);

export const AHList = (props: Props) => (
  <List style={props.style}>
    {props.children}
  </List>
);

