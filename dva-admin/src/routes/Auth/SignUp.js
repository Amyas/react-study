import React from "react";
import { connect } from "dva";
import styles from "./SignUp.css";

function SignIn() {
  return <div className={styles.normal}>Route Component: SignUp</div>;
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SignIn);
