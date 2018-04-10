// @flow
import React, { PureComponent } from 'react';
import styles from './AHErrorNotification.css';
import { withTheme, AHThemeType } from '../AHTheme/AHTheme';

class AHErrorNotificationUnthemed extends PureComponent {
  props: {
    style?: any,
    theme: AHThemeType,
    title: string,
    message: string
  };

  render = () =>
    <div
      style={{
        ...{ backgroundColor: this.props.theme.NegativeColor },
        ...this.props.style
      }}
      className={styles.errorNotification}
    >
      <h3>
        {this.props.title}
      </h3>
      <p>
        {this.props.message}
      </p>
    </div>;
}

export const AHErrorNotification = withTheme(AHErrorNotificationUnthemed);
