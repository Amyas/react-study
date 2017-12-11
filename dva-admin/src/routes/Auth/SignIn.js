import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import styles from "./SignIn.css";

class SignIn extends React.Component {
  componentWillReceiveProps(props) {
    this.props.dispatch(
      routerRedux.push({
        pathname: "/app"
      })
    );
  }
  render() {
    return (
      <div className={styles.normal}>
        Route Component: SignIn
        <button
          onClick={() => {
            this.props.dispatch({
              type: "signIn/authorizations",
              payload: {
                phone: "15712552986",
                password: "huaxing2017"
              }
            });
          }}
        >
          登录
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { token } = state.signIn;
  return { token };
}

export default connect(mapStateToProps)(SignIn);
