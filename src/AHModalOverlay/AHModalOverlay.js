import React from "react";
import * as styles from "./AHModalOverlay.css";

export const AHModalOverlay = props =>
  <div
    className={styles.ps}
    onClick={function(e) {
      props.onBackgroundClick && props.onBackgroundClick(e);
    }}
    style={{
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: 10,
      background: "rgba(255,255,255,0.9)",
      ...props.style
    }}
  >
    <div onClick={function(e){e.stopPropagation()}}>{props.children}</div>
  </div>;
