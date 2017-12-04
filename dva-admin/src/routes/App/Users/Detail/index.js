import React from "react";
import { connect } from "dva";
import styles from "./index.css";

function UserDetail() {
  return <div className={styles.normal}>Route Component: UserDetail</div>;
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserDetail);
