import { Fragment } from "react";
import styles from './index.less';
function BasicLayout(props) {
  return (
    <Fragment>
      <div className={styles["g-header"]}>头部</div>
      <div className={styles["g-container"]}> {props.children}</div>
      <div className={styles["g-footer"]}>底部</div>
    </Fragment>
  );
}

export default BasicLayout;
