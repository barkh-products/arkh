// @flow
import React, { Children, PureComponent } from 'react';
import styles from './AHDetailButton.css';

export class AHDetailButton extends PureComponent {
  props: {
    children?: Children,
    onClick: Event => void,
    style?: any
  };

  static defaultProps = {
    onClick: () => {}
  };

  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={{ ...this.props.style }}
        className={styles.button}
      >
        {this.props.children}
      </div>
    );
  }
}
