// @flow
import React from "react";
import Autosuggest from "react-autosuggest-ie11-compatible";
import theme from "./theme.css";
import { AHDetailButton } from "../AHDetailButton/AHDetailButton";
import { withTheme } from "../AHTheme/AHTheme";

const wrapperOfTheWrapperStyle = {
  display: "flex",
  position: "relative",
  cursor: "pointer",
  alignItems: "center",
  marginLeft: "5%",
  marginRight: "5%"
};

const AHAutocompleteUnthemed = props => {
  const { style, loading, inputProps, autoRef, ...childProps } = props;
  const { onChange, ...restInputProps } = inputProps;

  return (
    <div style={{...wrapperOfTheWrapperStyle, ...style}}>
      {props.clearButton &&
        <AHDetailButton
          onClick={props.clearButtonOnClick}
          style={{ border:"0" }}
        >
          ✕
        </AHDetailButton>}
      {loading &&
        <i
          style={{ position: "absolute", right: 20, zIndex: 4 }}
          className="fa fa-spinner fa-spin fa-1x fa-fw"
        />}
      <Autosuggest
        ref={autoRef}
        {...childProps}
        inputProps={{
          ...restInputProps,
          onChange: (e, val) => {
            onChange(e, val ? val : { newValue: e.target.value });
          }
        }}
        theme={theme}
      />
    </div>
  );
};

export const AHAutocomplete = withTheme(AHAutocompleteUnthemed);
