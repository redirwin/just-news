import axios from "axios";

export const FETCH_NEWS_START = "FETCH_NEWS_START";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS ";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE ";

export const getNews = () => dispatch => {
  console.log("In action!");
  dispatch({ type: FETCH_NEWS_START });
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=fa6d8c6580fb4502a4350bfbdc239b28"
    )
    .then(res => {
      // console.log(res.data);
      dispatch({ type: FETCH_NEWS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Here's the error: ", err);
      dispatch({ type: FETCH_NEWS_FAILURE, payload: err });
    });
};
