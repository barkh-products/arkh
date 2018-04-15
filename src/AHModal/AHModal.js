// @flow
import * as React from "react";
import styles from "./AHModal.css";
import { AHModule } from "../AHModule/AHModule";

type Props = {
  children?: React.Node,
  onBackgroundClick?: (Event) => void
};

export class AHModal extends React.PureComponent<Props> {
  

  click = (e: Event) => e.stopPropagation();

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
    <div onClick={this.props.onBackgroundClick ? this.props.onBackgroundClick : undefined} className={styles.modal}>
      <div className={styles.modalContent}>
        <AHModule print onClick={this.click} {...this.props} />
      </div>
    </div>
  );
}
