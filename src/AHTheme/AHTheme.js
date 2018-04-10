import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export type AHThemeType = {
  primaryColor: string,
  secondaryColor: string,
  negativeColor: string,
  positiveColor: string,
  lightText: string,
  washedText: string,
  darkText: string,
  baseColor: string
};

export const defaultTheme: AHThemeType = {
  primaryColor: 'gray',
  secondaryColor: 'white',
  negativeColor: '#F66865',
  positiveColor: 'green',
  lightText: 'white',
  darkText: 'black',
  washedText: 'gray',
  baseColor: '#FFF'
};

export class AHTheme extends Component {
  props: {
    children?: Children,
    theme: AHThemeType
  };

  static childContextTypes = {
    theme: PropTypes.object
  };

  getChildContext() {
    return { theme: this.props.theme };
  }

  render() {
    return this.props.children;
  }
}

export const withTheme = WrappedComponent => {
  return class extends Component {
    static contextTypes = {
      theme: PropTypes.object
    };
    render() {
      return (
        <WrappedComponent
          theme={{ ...defaultTheme, ...this.context.theme }}
          {...this.props}
        />
      );
    }
  };
};
