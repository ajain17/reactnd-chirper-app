import { RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
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
          likes:
            action.hasLiked === true
              ? //if they had previously liked it, then remove them from the list of likes
                state[action.id].likes.filter(uid => uid !== action.authedUser)
              : //else add them
                state[action.id].likes.concat([action.authedUser])
        }
      };
    default:
      return state;
  }
}
