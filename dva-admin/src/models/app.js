import { routerRedux } from "dva/router";
export default {
  namespace: "app",
  state: {},
  reducers: {},
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        // const user = localStorage.getItem("user");
        // if (!user && pathname !== "/login") {
        // dispatch(routerRedux.push("/login"));
        // }
      });
    }
  }
};
