import { ADD_USER_REQUEST, ADD_USER_SUCCESS, FETCH_USERS, RECEIVE_USERS } from '../actions/types';

export default function usersReducer (state = {}, action) {
  switch (action.type) {
  case FETCH_USERS:
    return state;
  case RECEIVE_USERS:
    return {users: action.data, ...state};
  case ADD_USER_REQUEST:
    return state;
  case ADD_USER_SUCCESS:
    return {users: [action.data, ...state.users]}
  default:
    return state
  }
}