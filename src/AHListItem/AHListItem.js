// @flow

import React, { Children, CSSProperties } from 'react';
import styles from './AHListItem.css';

type Props = {
  children?: Children,
  key?: any,
  style?: CSSProperties
};

export const AHListItem = (props: Props) =>
  <li className={styles.listItem} style={props.style} onClick={props.onClick}>
    {props.children}
  </li>;
