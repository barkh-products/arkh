import React from "react";

import styles from "./AHSubmitButton.css";

export const AHSubmitButton = props => {
  const { loading, style, ...rest } = props;
  return (
    <div style={style} className={styles.wrapper}>
      {loading
        ? <i className="fa fa-spinner fa-spin fa-2x fa-fw" />
        : <input type="submit" className={styles.button} {...rest} />}
    </div>
  );
};
