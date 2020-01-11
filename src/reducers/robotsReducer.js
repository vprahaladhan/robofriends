const initialState = {
  robots: []
};

export const robotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "FETCH_REMOTE_ROBOTS":
      return {...state, robots: action.data};
    default:
      return state;
  }
};
