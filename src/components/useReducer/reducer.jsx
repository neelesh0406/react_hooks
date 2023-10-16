const reducer = (state, action) => {
  switch (action.type) {
    case "DSC":
      let newState = 0;
      state >= 1 ? (newState = state - 1) : (newState = 0);
      return newState;
    //   return (state = state - 1);
    case "INC":
      return (state = state + 1);
    default:
      return state;
  }
};

export default reducer;
