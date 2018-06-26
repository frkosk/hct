import { ADD_USER, FETCH_USERS } from '../actions/types';

export default function usersReducer (state = [], action) {
  switch (action.type) {
  case FETCH_USERS:
    return action.users;
  case ADD_USER:
    return [action.users, ...state];
  default:
    return state
  }
}