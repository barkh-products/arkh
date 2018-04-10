// @flow
import React, { Children } from 'react';

const styles = {
  MODULE: {
    fontSize: 19,
    flex: "1 0 auto",
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: '0.5px',
    marginTop: 20,
    marginBottom: 20,
    fontWeight:500
  },
  BIGBOY:{
    fontSize: 27,
    flex: "1 0 auto",
    alignSelf: "center",
    textAlign: "center",
    letterSpacing: "0.5px",
    marginTop: 50,
    marginBottom: 70,
    fontWeight: "bold",
  },

  STANDARD: {
    fontSize: 17,
    flex: "1 0 auto",
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: '0.5px',
    marginTop: 0,
    marginBottom: 10,
    fontWeight:'normal'
  },
  SUB: {
    fontSize: 15,
    flex: "1 0 auto",
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 400
  }
};

const typeStyles = (type: $Keys<typeof styles>) => styles[type];

type AHTitleProps = {
  children?: Children,
  type: $Keys<typeof styles>,
  style: any
};

/* @component */
export const AHTitle = (props: AHTitleProps) =>
  <h1 style={{ ...typeStyles(props.type ? props.type : 'MODULE'), ...props.style}}>
    {props.children}
  </h1>;
