// @flow
import React, { Component } from "react";
import Color from "color";
import styled from "styled-components";
//import { Feedback } from "./Feedback";
import { AHPopup } from "../AHPopup/AHPopup";
import { withTheme, AHThemeType } from "../AHTheme/AHTheme";

const ToolbarTitle = styled.h3`
  margin-left: 5px;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const ToolbarSubTitle = styled.div`
  margin-left: 5px;
  color: white;
  font-weight: 300;
`;

const ToolbarDetail = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
  align-items: center;
  flex-direction: row-reverse;
`;

class AHToolbarDetail extends Component<
  {
    settings: mixed,
    title: string,
    subtitle: string,
    settingsEnabled: boolean
  },
  { settingsPopupVisible: boolean }
> {
  state = {
    settingsPopupVisible: false
  };

  toggleSettingsPopupVisible = () => {
    this.setState({ settingsPopupVisible: !this.state.settingsPopupVisible });
  };
  render() {
    return (
      <ToolbarDetail>
        <ToolbarSubTitle>{this.props.subtitle}</ToolbarSubTitle>
        <ToolbarTitle>{this.props.title}</ToolbarTitle>
        {this.props.settings !== undefined &&
          this.props.settingsEnabled && (
            <ToolbarTitle onClick={this.toggleSettingsPopupVisible}>
              <i className="fi-widget" />
              <AHPopup
                shift={-125}
                active={this.state.settingsPopupVisible}
                onClickOutside={this.toggleSettingsPopupVisible}
              >
                {this.props.settings}
              </AHPopup>
            </ToolbarTitle>
          )}
      </ToolbarDetail>
    );
  }
}

const ToolbarWrapper = styled.div`
  background: ${props => props.theme.secondaryColor};
  color: ${props =>
    Color(props.theme.secondaryColor)
      .darken(0.4)
      .light()
      ? props.theme.darkText
      : props.theme.lightText};
  @media print {
    display: none !important;
  }
  display: flex;
  height: 40px;
  margin: 0;
  flex-shrink: 0;
  padding-left: 20;
  padding-right: 20;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  font-size: 13px;
  padding: 0 10px 0 0;
  z-index: 10;
  position: relative;
`;
class AHToolbarUnthemed extends Component<
  {
    children?: mixed,
    theme: AHThemeType,
    style?: any,
    subtitle: string,
    title: string,
    settings: Object,
    detailChildren: mixed,
    settingsEnabled: boolean
  },
  {
    feedbackIsShowing: boolean
  }
> {
  state = {
    feedbackIsShowing: false
  };
  openFeedback = () => this.setState({ feedbackIsShowing: true });

  closeFeedback = () => this.setState({ feedbackIsShowing: false });

  render = () => (
    <ToolbarWrapper style={this.props.style}>
      <AHToolbarDetail
        settings={this.props.settings}
        subtitle={this.props.subtitle}
        title={this.props.title}
        settingsEnabled={this.props.settingsEnabled}
      >
        {this.props.detailChildren}
      </AHToolbarDetail>

      {this.props.children}
      {/*<h3 style={{ cursor: "pointer", height: 40 }}>
        <AHToolbarTextButton icon="fi-megaphone" onClick={this.openFeedback}>
          FEEDBACK
        </AHToolbarTextButton>

        <AHPopup
          active={this.state.feedbackIsShowing}
          onClickOutside={this.closeFeedback}
          arrowShift={-70}
        >
          <Feedback onCancel={this.closeFeedback} onSent={this.closeFeedback} />
        </AHPopup>
  </h3>*/}
    </ToolbarWrapper>
  );
}

export const AHToolbar = withTheme(AHToolbarUnthemed);
