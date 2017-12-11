import * as userServers from "../../services/app/userServers";
export default {
  namespace: "users",
  state: {
    list: [],
    current: 1,
    total: null
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    *query({ payload }, { call, put }) {
      const { data: list, meta: { pagination } } = yield call(
        userServers.query,
        payload
      );
      const { current_page: current, total } = pagination;
      yield put({
        type: "updateState",
        payload: { list, current, total }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === "/app/users") {
          dispatch({
            type: "query",
            payload: { page: 1 }
          });
        }
      });
    }
  }
};
