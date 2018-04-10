import styled from "styled-components";

export const AHBadge = styled.div`
  width: 22px;
  height: 22px;
  background: ${props => props.theme.negativeColor};
  color: ${props => props.theme.lightText};
  border-radius: 11px;
  text-align: center;
  position: absolute;
  right: -10px;
  top: -10px;
  font-size: 13px;
  line-height: 22px;
  text-indent: 1px;
  font-weight: bold;
  display: ${props => (props.deactivated ? "none" : "block")};
`;
