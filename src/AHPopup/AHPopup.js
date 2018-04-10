import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const zoomIn = keyframes`
0% {
    opacity: 0;
    transform: scale(0.9) translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }`;

const Wrapper = styled.div`
  width: ${props => props.width}px;
  margin-top: 5px;
  animation: ${zoomIn} 0.2s ease;
  box-shadow: 0px 2px 70px rgba(0, 0, 0, 0.4);
  position: absolute;
  background: #fff;
  margin-left: ${props => props.shift}px;
  z-index: 9;
`;
const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  top: -5px;
  left: ${props => (props.width / 2) - 20 + (props.arrowShift ? props.arrowShift : 0)}px;
`;
export class AHPopup extends Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setRef = node => {
    this.r = node;
  };

  handleClickOutside = event => {
    if (this.r && !this.r.contains(event.target)) {
      this.props.onClickOutside(event);
    }
  };

  render() {
    return this.props.active ? (
      <Wrapper
        width={this.props.width ? this.props.width : 280}
        shift={this.props.shift}
        innerRef={this.setRef}
        onClick={this.props.onClick}
      >
        <Arrow width={this.props.width ? this.props.width : 280} arrowShift={this.props.arrowShift} />
        {this.props.children}
      </Wrapper>
    ) : null;
  }
}
