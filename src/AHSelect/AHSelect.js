import React from 'react';
import styled from "styled-components";

/** @component */
export const AHSelect = styled.select `
  -webkit-appearance: none;
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #eeeeee;
  border: none;
  outline: none;
  border-radius: 2px;
  transition: 0.2s;
  font-size: 16px;
  margin: 10px 5%;
  padding: 1.6em;
  cursor: pointer;
  :hover{
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

