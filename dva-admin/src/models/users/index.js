import * as userServers from "../../services/app/userServers";
export default {
  namespace: "users",
  state: {
    list: [],
    current: 1,
    total: null,
    modalVisible: false,
    modalType: "create",
    currentItem: null
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    changeModalVisible(state, { payload }) {
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
    },
    *create({ payload }, { call, put, select }) {
      const data = yield call(userServers.create, payload);
      const { current } = yield select(state => state.users);
      yield put({
        type: "query",
        payload: { page: current }
      });
      yield put({
        type: "changeModalVisible",
        payload: { modalVisible: false }
      });
    },
    *delete({ payload }, { call, put, select }) {
      yield call(userServers.del, payload);
      const { current } = yield select(state => state.users);
      yield put({
        type: "query",
        payload: { page: current }
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
