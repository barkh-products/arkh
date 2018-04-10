import React from "react";
import styled from "styled-components";
import { AHShakeableClickArea } from "../AHShakeableClickArea/AHShakeableClickArea";

const Icon = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 6px;
  transform: translateX(0px);
  transition: 0.3s cubic-bezier(.77, .17, .4, 1.4);
`;

const TextContainer = styled.div`padding: 0 20px;`;

const Container = styled.div`
  cursor: pointer;
  background: rgba(255, 255, 255, 0);
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  min-width: 40px;
  height: 100%;
  text-transform: uppercase;
  line-height: 40px; //Behöver ändras om headerheight ändras
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  overflow: hidden;

  :hover {
    background: ${props =>
      props.warning
        ? props.theme.negativeColor
        : "rgba(255,255,255,0.35);"};

    color: ${props => (props.warning ? "white" : "")};
  }

  :hover ${Icon} {
    transform: translateX(5px);
  }
`;

export const AHToolbarTextButton = props =>
  <Container warning={props.warning} disabled={props.disabled} onClick={props.onClick}>
    <AHShakeableClickArea shouldShake={props.disabled}>
      <TextContainer>
        {props.children}
        <Icon>
          <i className={props.icon} />
        </Icon>
      </TextContainer>
    </AHShakeableClickArea>
  </Container>;
