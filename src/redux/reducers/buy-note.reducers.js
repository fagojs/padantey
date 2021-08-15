const SET_TOTNOTES = "SET_TOTNOTES";
const INITIAL_STATE = {
  totalNotes: [],
};

const buyNoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TOTNOTES:
      return {
        ...state,
        totalNotes: action.payload,
      };
    default:
      return state;
  }
};

export default buyNoteReducer;
