import { SHOW_NAME } from "../actions";

const initialState = {
  name: "Just the News"
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NAME:
      console.log("In reducer!");
    default:
      return state;
  }
}

export default reducer;
