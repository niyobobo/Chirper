import {
  RECEIVE_TWEETS,
  TOGGLE_TWEET,
  ADD_TWEET,
} from '../actions/tweets';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked ?
            state[action.id].likes.filter(e => e !== action.authedUser) : state[action.id].likes.concat([action.authedUser])
        }
      };
    case ADD_TWEET:
      // const { tweet } = action;
      // let replyingTo = {};
      // if (tweet.replyingTo) {
      //   [tweet.replyingTo]:
      // }
      // return {
      //   ...state,
      //   [tweet.id]: tweet
      // };
    default:
      return state;
  }
}