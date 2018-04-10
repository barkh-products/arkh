import React from "react";
import styled, { keyframes } from "styled-components";
import { withTheme } from "../AHTheme/AHTheme";

const ShakeAnimation = keyframes`
0% {
    transform: translateX(-50%) translateY(-50%) scale(0,0);
  }
  
  
  80%{
    transform: translateX(-50%) translateY(-50%)  scale(0.8,0.8);
    opacity: 0.2;
    
  }
  100%{
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(1,1);
  }

  
  
`;

const BgCircle = styled.div`
  animation: ${props => (props.isShaking ? ShakeAnimation : "")} 0.4s ease-out;
  opacity: 0;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: ${props => props.theme.primaryColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translateX(-50%);
`;

class AHBgAnimationClickAreaUnthemed extends React.Component {
  state = {
    isShaking: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  shake = e => {
    if (this.props.animateOnClick) {
      this.setState({ isShaking: true });

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({ isShaking: false });
      }, 400);
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const { animateOnClick, setIsShaking, ...props } = this.props;
    return (
      <div>
        <div {...props} style={{ position: "relative", transform: "translateZ(0)" }} onClick={this.shake}>
          <div>{props.children}</div>
          <BgCircle isShaking={this.state.isShaking} theme={props.theme} />
        </div>
      </div>
    );
  }
}

export const AHBgAnimationClickArea = withTheme(AHBgAnimationClickAreaUnthemed);
