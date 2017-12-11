import * as authServers from "../services/auth/authServers";
export default {
  namespace: "signIn",
  state: {
    token: null
  },
  reducers: {
    updateToken(state, { payload }) {
      window.localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        token: payload
      };
    }
  },
  effects: {
    *authorizations({ payload }, { call, put }) {
      const { data: { token } } = yield call(authServers.signIn, payload);
      yield put({
        type: "updateToken",
        payload: token
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/auth/signIn") {
        }
      });
    }
  }
};
