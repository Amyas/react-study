const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    text: `Edrward ${i}`
  });
}

const reducers = (state = data, action) => {
  switch (action.type) {
    case "ADD":
      return [action.data, ...state];
    case "UPDATE":
      return [...action.data];
    default:
      return state;
  }
};

export default reducers;
