import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import styles from "./SignIn.css";

function SignIn() {
  return (
    <div className={styles.normal}>
      Route Component: SignIn
      <Link to="/app">登陆</Link>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SignIn);
