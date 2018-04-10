// @flow
import React, { Children } from 'react';
import styles from './AHModuleContainer.css';

export const AHModuleContainer = ({
  children,
  style
}: {
  children?: Children,
  style: mixed
}) =>
  <div style={style} className={styles.moduleContainer}>
    {children}
  </div>;
