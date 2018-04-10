import React from "react";
import { withTheme, AHThemeType } from "../AHTheme/AHTheme";
import { withHandlers } from "recompose";
import ReactTooltip from "react-tooltip";

import Color from 'color';

const selectedStyle = (theme: AHThemeType) => ({
  cursor: "pointer",
  color: Color(theme.primaryColor).mix(Color('#FFF'), 0.8).hexString(),
  fontSize: 20,
  marginLeft: 15
});
const unselectedStyle = (theme: AHThemeType) => ({ marginLeft: 15,fontSize: 20,cursor: "pointer", color: Color(theme.washedText).hexString()});

export const AHWarehouseDepartmentSwitch = withHandlers({
  selWarehouse: props => () => props.setDepartmentRelevance(false),
  selDep: props => () => props.setDepartmentRelevance(true)
})(withTheme(props =>
  <div data-tip data-for="switchTip">

    <ReactTooltip id="switchTip" type="dark" effect="solid">
      <span>
        {props.tooltipText}
      </span>
    </ReactTooltip>

    <label
      onClick={props.selWarehouse}
      style={
        props.departmentRelevance
          ? unselectedStyle(props.theme)
          : selectedStyle(props.theme)
      }
    >
      <i className='fi-home'/>
    </label>
    <label
      onClick={props.selDep}
      style={
        props.departmentRelevance
          ? selectedStyle(props.theme)
          : unselectedStyle(props.theme)
      }
    >
      <i className='fi-marker'/>
    </label>
  </div>
));
