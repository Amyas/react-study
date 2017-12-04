export default {
  namespace: "signIn",
  state: {},
  reducers: {},
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/signIn") {
        }
      });
    }
  }
};
