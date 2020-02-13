import { getInitialData } from '../utils/api';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const { users, tweets } = await getInitialData();
    dispatch(receiveTweets(tweets));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  } catch (e) {
    console.log(e)
  }
}