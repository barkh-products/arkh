// @flow

import React, { Children, CSSProperties } from 'react';
import styled from "styled-components";
import { withTheme } from "../AHTheme/AHTheme";
import Color from "color";

type Props = {
  children?: Children,
  key?: any,
  style?: CSSProperties
};

const ListItem = withTheme(styled.li`
min-height:50px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 13px;
border-bottom: ${props => "1px solid " + Color(props.theme.baseColor)
      .darken(0.1)
      .hexString()};
font-weight: normal;
max-height: 600px;
`);

export const AHListItem = (props: Props) =>
  <ListItem style={props.style} onClick={props.onClick}>
    {props.children}
  </ListItem>;
