// @flow
import React, { Children, PureComponent } from "react";
import styles from "./AHModal.css";
import { AHModule } from "../AHModule/AHModule";

type Props = {
  children?: Children,
  onBackgroundClick: () => void
};

export class AHModal extends PureComponent {
  props: Props;

  click = e => e.stopPropagation();

  componentDidMount() {
    const root = document.getElementById("root");

    if (root) {
      root.style.overflow = "hidden";
    }
  }

  componentWillUnmount() {
    const root = document.getElementById("root");
    if (root) {
      root.style.overflow = "auto";
    }
  }

  render = () => (
    <div onClick={this.props.onBackgroundClick} className={styles.modal}>
      <div className={styles.modalContent}>
        <AHModule print onClick={this.click} {...this.props} />
      </div>
    </div>
  );
}
