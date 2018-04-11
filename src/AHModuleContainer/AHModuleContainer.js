// @flow
import React, { Children } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: space-around;
  padding: 10px;
`;
export const AHModuleContainer = ({
  children,
  style,
  direction = "row"
}: {
  children?: React$Element<any>,
  style: any,
  direction: "row" | "column" 
}) => (
  <Container direction={direction}  style={style}>
    {children}
  </Container>
);
