import React from "react";
import styled, { keyframes } from "styled-components";
import { withState } from "recompose";

const ShakeAnimation = keyframes`
50% {
    transform: translate3d(-6px, 0, 0);
  }
  
  25%, 70%{
    transform: translate3d(6px, 0, 0);
  }

  85%{
    transform: translate3d(-4px, 0, 0);
  }
  100%{
    transform: translate3d(0, 0, 0);
  }

  
  
`;

const Shake = styled.div`
  animation: ${props => (props.isShaking ? ShakeAnimation : "")} 0.3s
    cubic-bezier(0.36, 0.07, 0.19, 0.97);
`;

type Props = {
  shouldShake?: boolean
};
export class AHShakeableClickArea extends React.Component {
  props: Props;

  defaultProps = {
    shouldShake: true
  };
  state = {
    isShaking: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onClick = e => {
    if (this.props.shouldShake) {
      this.setState({ isShaking: true });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({ isShaking: false });
      }, 600);
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const { shouldShake, onClick, ...rest } = this.props;
    return (
      <Shake
        {...rest}
        isShaking={this.state.isShaking}
        onClick={this.onClick}
      />
    );
  }
}
