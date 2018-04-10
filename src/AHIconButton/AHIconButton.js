// @flow
import React, { Children, PureComponent } from "react";
import styles from "./AHIconButton.css";

import ReactTooltip from "react-tooltip";

import { withTheme, AHThemeType } from "../AHTheme/AHTheme";

type AHButtonTypes = "NORMAL" | "NEGATIVE" | "POSITIVE";

const typeStyles = (type: AHButtonTypes, theme: AHThemeType) =>
  ({
    NORMAL: {},
    NEGATIVE: {
      background: theme.negativeColor
    },
    POSITIVE: {
      background: theme.positiveColor
    },
    SQUARE: {
      border: "none"
    }
  }[type]);

class AHIconButtonUnthemed extends PureComponent {
  props: {
    children?: Children,
    style?: any,
    label: string,
    icon:  React.Element<any>,
    onClick: Event => void,
    type: AHButtonTypes,
    disabled?: boolean,
    theme: AHThemeType
  };

  static defaultProps = {
    label: "",
    icon: AHIconButtonUnthemed._renderDefault,
    onClick: () => {},
    type: "NORMAL",
    disabled: false
  };

  static _renderDefault(): React.Element<any> {
    return <img alt="not specified" />;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {!!this.props.tooltipText &&
          <ReactTooltip
            id={this.props.tooltipText}
            place="bottom"
            type="dark"
            effect="solid"
          >
            <div style={{ maxWidth: 300 }}>
              {this.props.tooltipText}
            </div>
          </ReactTooltip>}
        <div
          data-tip
          data-for={this.props.tooltipText}
          onClick={this.props.onClick}
          style={{
            ...(this.props.disabled ? { opacity: 0.6 } : {}),
            ...this.props.style,
            ...typeStyles(this.props.type, this.props.theme)
          }}
          className={styles.button}
        >
          <div className={styles.icon}>
            {this.props.icon}
          </div>
          <label className={styles.label}>
            {this.props.label}
          </label>
        </div>
      </div>
    );
  }
}

export const AHIconButton = withTheme(AHIconButtonUnthemed);
