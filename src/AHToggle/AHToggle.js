import React, { PureComponent } from "react";
import styles from "./AHToggle.css";
import { withTheme } from "../AHTheme/AHTheme";

import ReactTooltip from "react-tooltip";

import Color from "color";

const toggleContainerStyle = ({ on, theme }) => ({
  backgroundColor: on
    ? theme.primaryColor
    : Color(theme.baseColor).darken(0.1).hexString()
});

const innerBoxStyle = ({ on, theme }) => ({
  transform: on ? "translateX(100%)" : "translateX(0)"
});

const innerInnerBoxStyle = ({ on, theme }) => ({
  backgroundColor: theme.baseColor
});

class AHToggleUnthemed extends PureComponent {
  onClick = () => {
    if (!this.props.disabled) {
      this.props.onClick();
    }
  };
  render = () =>
    <div
      data-tip
      data-for="toggleTip"
      style={{ ...this.props.style, opacity: this.props.disabled ? 0.2 : 1 }}
      onClick={this.onClick}
      className={styles.toggleContainer}
    >
      {this.props.tooltipText &&
        <ReactTooltip id="toggleTip" type="dark" effect="solid">
          <span>
            {this.props.tooltipText}
          </span>
        </ReactTooltip>}
      {this.props.label &&
        <label className={styles.label}>
          {this.props.label}
        </label>}
      <div className={styles.toggle} style={toggleContainerStyle(this.props)}>
        <div className={styles.innerBox} style={innerBoxStyle(this.props)}>
          <div
            className={styles.innerInnerBox}
            style={innerInnerBoxStyle(this.props)}
          />
        </div>
      </div>
    </div>;
}

export const AHToggle = withTheme(AHToggleUnthemed);
