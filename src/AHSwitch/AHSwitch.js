import React from "react";
import { withTheme, AHThemeType } from "../AHTheme/AHTheme";
import { toClass } from "recompose";
import styled from "styled-components";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

const Underscore = styled.div`
  opacity: ${props => (props.active ? 1 : 0)};
  transform: ${props => (props.active ? "translate(0,0)" : "translate(0,8px)")};
  margin-top: 6px;
  background-color: ${props => props.background};
  width: 100%;
  height: 1px;
  transition: 0.2s ease-out;
`;

const Container = styled.div`
  &:hover ${Underscore} {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

export type AHSwitchType = "NORMAL" | "COLLAPSED";

type Props = {
  type: AHSwitchType,
  labels: string[],
  activeIndex: number,
  onActiveIndexChange: number => void,
  theme: AHThemeType,
  Component: React$ReactElement<any>,
  componentProps: any
};
class AHSwitchUnthemede extends React.Component {
  displayName = "AHSwitch";

  props: Props;

  render() {
    const {
      type,
      style,
      labels,
      activeIndex,
      onActiveIndexChange,
      theme,
      Component,
      componentProps
    } = this.props;

    return type === "COLLAPSED" ? (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ...style
        }}
      >
        <div
          style={{
            visibility: activeIndex > 0 ? "visible" : "hidden",
            cursor: "pointer"
          }}
          onClick={function() {
            if (activeIndex > 0) {
              onActiveIndexChange(activeIndex - 1);
            }
          }}
        >
          <FontAwesome name="arrow-left" />
        </div>
        {Component ? (
          <Component {...componentProps}>{labels[activeIndex]}</Component>
        ) : (
          labels[activeIndex]
        )}

        <div
          style={{
            visibility: activeIndex + 1 < labels.length ? "visible" : "hidden",
            cursor: "pointer"
          }}
          onClick={function() {
            if (activeIndex + 1 < labels.length) {
              onActiveIndexChange(activeIndex + 1);
            }
          }}
        >
          <FontAwesome name="arrow-right" />
        </div>
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          ...style
        }}
      >
        {labels.map(
          (label, index) =>
            label ? (
              <div
                key={index}
                style={{
                  display: "flex",
                  flex: 1,
                  fontSize: 16,
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Container
                  onClick={function() {
                    onActiveIndexChange(index);
                  }}
                  style={{
                    flex: 1,
                    padding: "5px 10px",
                    cursor: "pointer",
                    margin: "0 4px",
                    //background: index === activeIndex ? "#aaa" : "none",
                    color:
                      index === activeIndex
                        ? theme.primaryColor
                        : theme.darkText
                  }}
                >
                  {Component ? (
                    <Component {...componentProps}>{label}</Component>
                  ) : (
                    label
                  )}

                  <Underscore
                    background={theme.primaryColor}
                    active={index === activeIndex}
                  />
                </Container>
              </div>
            ) : null
        )}
      </div>
    );
  }
}

export const AHSwitch = withTheme(AHSwitchUnthemede);
