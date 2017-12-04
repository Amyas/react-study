import React from "react";
import { connect } from "dva";
import styles from "./SignIn.css";

function SignIn() {
  return <div className={styles.normal}>Route Component: SignIn</div>;
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SignIn);
