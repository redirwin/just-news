export const FETCH_NEWS_START = "FETCH_NEWS_START";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS ";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE ";

export const getNews = () => dispatch => {
  // console.log("In action!");
  dispatch({ type: FETCH_NEWS_START });
};
