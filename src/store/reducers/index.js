import {
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE
} from "../actions";

const initialState = {
  error: "",
  isFetching: false,
  headlines: {},
  results: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_START:
      console.log("In FETCH_NEWS_START!");
      return {
        ...state,
        error: "",
        isFetching: true,
        headlines: {},
        results: 0
      };
    case FETCH_NEWS_SUCCESS:
      console.log("In FETCH_NEWS_SUCCESS!");
      console.log(action.payload.totalResults);
      return {
        ...state,
        error: "",
        isFetching: false,
        headlines: action.payload.articles,
        results: action.payload.totalResults
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        headlines: {},
        results: 0
      };
    default:
      return state;
  }
}

export default reducer;
