const SET_SOLDNOTES = "SET_SOLDNOTES";

const INITIAL_STATE = {
  soldData: [],
};

const soldNoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOLDNOTES:
      return {
        ...state,
        soldData: action.payload,
      };
    default:
      return state;
  }
};

export default soldNoteReducer;
