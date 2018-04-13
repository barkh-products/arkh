import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  :after {
    content: "";
    position: relative;
    background: #606060;
    display: block;
    height: 3px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: 0.3s;
  }
  :hover {
    :after {
      transform: scaleX(1);
    }
  }
`;

const Submit = styled.input`
  margin-right: 0;
  border: none;
  outline: none;
  background: none;
  text-align: left;
  font-weight: 400;
  font-size: 17px;
  padding: 5px 0;
  cursor: pointer;
  :hover {
    border-bottom: 3px solid 606060;
  }
`;
export const SubmitButton = props => {
  const { loading, style, children, ...rest } = props;
  return (
    <Wrapper style={style}>
      {loading ? (
        <i className="fa fa-spinner fa-spin fa-2x fa-fw" />
      ) : (
        <Submit type="submit" {...rest} />
      )}
    </Wrapper>
  );
};