// @flow
import * as React from "react";
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

type Item = {};

type Props = {
  items: Item[],
  onChange: (newValue: string) => void,
  value: string,
  getItemValue: Item => string,
  filter: Item => boolean,

  clearButton?: boolean,
  clearButtonOnClick?: Event => void,
  style?: {},
  loading?: boolean,
  autoRef?: any
};

export class AHAutocomplete extends React.Component<Props, any> {
  state = {
    items: []
  };

  onSuggestionsFetchRequested = () => {
    this.setState({ items: this.props.items.filter(this.props.filter) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ items: [] });
  };

  render() {
    const {
      value,
      items,
      onChange,
      clearButton,
      clearButtonOnClick,
      style,
      loading,
      inputProps,
      autoRef,
      ...childProps
    } = this.props;

    return (
      <div style={{ ...wrapperOfTheWrapperStyle, ...style }}>
        {clearButton && (
          <AHDetailButton onClick={clearButtonOnClick} style={{ border: "0" }}>
            ✕
          </AHDetailButton>
        )}
        {loading && (
          <i
            style={{ position: "absolute", right: 20, zIndex: 4 }}
            className="fa fa-spinner fa-spin fa-1x fa-fw"
          />
        )}
        <Autosuggest
          ref={autoRef}
          {...childProps}
          theme={theme}
          getSuggestionValue={this.props.getItemValue}
          suggestions={this.state.items}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          inputProps={{
            value: value,
            onChange: (e, val) => {
              onChange(val && val.newValue ? val.newValue : e.target.value);
            }
          }}
        />
      </div>
    );
  }
}
