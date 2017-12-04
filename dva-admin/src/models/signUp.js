export default {
  namespace: "signUp",
  state: {},
  reducers: {},
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/signUp") {
        }
      });
    }
  }
};
