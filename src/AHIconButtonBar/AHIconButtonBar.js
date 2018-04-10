// @flow
import React, { Children, PureComponent } from 'react';
import type CSSProperties from 'react';

import styles from './AHIconButtonBar.css';

export const AHIconButtonBarItem = ({ children, style }: { children?: Children, style: CSSProperties }) => {
  return (
    <div className={styles.iconItem} style={style}>
      {children}
    </div>
  );
};

type Direction = 'ROW' | 'COLUMN';

export class AHIconButtonBar extends PureComponent {
  props: {
    children: React.Element<*>[] ,
    divisions: number,
    direction: Direction
  };

  static defaultProps = {
    divisions: 1,
    direction: 'ROW'
  };

  iconsForDivision(division: number) {
    //TODO: fix single child problem. Fuck?
    if (this.props.children && this.props.children.length > 0) {
      const iconsPerDivision = Math.ceil(
        this.props.children.length / this.props.divisions
      );
      const startIndex = iconsPerDivision * division;
      const endIndex = startIndex + iconsPerDivision;
      return this.props.children.slice(startIndex, endIndex);
    } else {
      return undefined;
    }
  }

  render() {
    let divisions = [];
    for (let i = 0; i < this.props.divisions; i++) {
      divisions.push(
        <div
          key={i}
          className={
            this.props.direction === 'ROW'
              ? styles.buttonBarRow
              : styles.buttonBarColumn
          }
        >
          {this.iconsForDivision(i)}
        </div>
      );
    }
    return (
      <div className={styles.buttonBar}>
        {divisions}
      </div>
    );
  }
}
