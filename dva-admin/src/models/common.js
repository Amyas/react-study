import { routerRedux } from "dva/router";
export default {
  namespace: "common",
  state: {},
  reducers: {},
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const token = localStorage.getItem("token");
        if (!token && pathname != "/auth/signIn") {
          dispatch(routerRedux.push("/auth/signIn"));
        }
      });
    }
  }
};
