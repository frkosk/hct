import { FETCH_ORDER, RECEIVE_ORDER } from '../actions/types';

export default function usersReducer (state = [], action) {
  switch (action.type) {
  case FETCH_ORDER:
    return state;
  case RECEIVE_ORDER:
    return {order: action.data, ...state};
  default:
    return state
  }
}