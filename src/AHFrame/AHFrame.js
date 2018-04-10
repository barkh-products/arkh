// @flow
import React, { Children} from 'react';

type BorderItem = {
  element: React.Element<any>,
  size: number
};
type Props = {
  children?: Children,
  top?: BorderItem,
  right?: BorderItem,
  bottom?: BorderItem,
  left?: BorderItem
};
export const AHFrame = ({ children, top, right, bottom, left, transition = "" }: Props) =>
  <div style={{height: '100%'}}>
    {top &&
      <div
        style={{
          position: 'fixed',
          zIndex: 10,
          left: left ? left.size : 0,
          top: 0,
          right: right ? right.size : 0,
          height: top ? top.size : 0,
          transition,
        }}
      >
        {top.element}
      </div>}
    {left &&
      <div
        style={{
          position: 'fixed',
          zIndex: 10,
          left: 0,
          top: 0,
          transition,
          bottom: 0,
          width: left.size
        }}
      >
        {left.element}
      </div>}
    {right &&
      <div
        style={{
          position: 'fixed',
          zIndex: 10,
          transition,
          right: 0,
          top: 0,
          bottom: 0,
          width: right.size
        }}
      >
        {right.element}
      </div>}
    {bottom &&
      <div
        style={{
          position: 'fixed',
          zIndex: 10,
          transition,
          left: 0,
          right: 0,
          bottom: 0,
          width: bottom.size
        }}
      >
        {bottom.element}
      </div>}
    <div
      style={{
        display: 'block',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        marginTop: top ? top.size : 0,
        marginRight: right ? right.size : 0,
        marginBottom: bottom ? bottom.size : 0,
        marginLeft: left ? left.size : 0,
        transition,
        position: 'static',
        flex: 1,
        zIndex: 0
      }}
    >
      {children}
    </div>
  </div>;
