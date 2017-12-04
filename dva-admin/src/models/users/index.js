export default {
  namespace: "user",
  state: {},
  reducers: {},
  effects: {
    // *query() {
    //   const data = yield call(userServers.query, payload);
    //   // console.log(data)
    //   return {};
    // }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/user") {
          // const payload = location.query || { page: 1, pageSize: 10 };
          // dispatch({
          //   type: "query",
          //   payload
          // });
        }
      });
    }
  }
};
