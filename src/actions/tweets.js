import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';
export const ADD_TWEET = 'ADD_TWEET';

export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}

const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet
  }
}

const toggleTweet = ({ id, authedUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  }
}

export const handleToggleTweet = (info) => async dispatch => {
  dispatch(toggleTweet(info));
  try {
    return saveLikeToggle(info);
  } catch (e) {
    dispatch(toggleTweet(info));
    return alert('There was an error liking the tweet. Try again.');
  }
}

export const handleAddTweet = (text, replyingTo) => (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  saveTweet({
    text,
    author: authedUser,
    replyingTo
  }).then(tweet => {
    dispatch(addTweet(tweet));
    dispatch(hideLoading());
  })
}