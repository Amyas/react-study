import { combineReducers } from "redux";

function reducer1(state = [], action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          text: action.text
        }
      ];
    case "CHANGE":
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          text: action.text
        }),
        ...state.slice(action.index + 1)
      ];
    case "DEL":
      return [
        ...state.splice(0, action.index),
        ...state.splice(action.index + 1)
      ];
    default:
      return state;
  }
}

function reducer2(state = {text:""}, action) {
  switch (action.type) {
    case "A":
      return Object.assign({},{
        text:action.text
      });
    case "B":
      return Object.assign({},{
        text:""
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  reducer1,
  reducer2,
});

export default reducer;
