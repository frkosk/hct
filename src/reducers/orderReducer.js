import { FETCH_ORDER } from '../actions/types';

export default function usersReducer (state = [], action) {
  switch (action.type) {
  case FETCH_ORDER:
    return action.order;
  default:
    return state
  }
}