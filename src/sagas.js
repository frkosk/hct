import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_USERS, FETCH_ORDER, ADD_USER_REQUEST } from "./actions/types";
import { fetchUsers, receiveUsersData, fetchOrder, receiveOrdersData, pushUserAsync, pushUserSucces } from "./actions";

// worker Saga: will be fired on FETCH_USERS actions
function* fetchAllUsers(action) {
  try {
    const data = yield call(fetchUsers);
    yield put(receiveUsersData(data));
  } catch (e) {
    console.log(e);
  }
}

// worker Saga: will be fired on FETCH_ORDER actions
function* fetchAPIOrder(action) {
  try {
    const data = yield call(fetchOrder);
    yield put(receiveOrdersData(data));
  } catch (e) {
    console.log(e);
  }
}

function* pushUser(action) {

  try {
    const response = yield call(pushUserAsync, action.user);
    if ( response === 200 ) {
      action.user.id = Date.now().toString();
      yield put(pushUserSucces(action.user));
    }
  } catch (error) {
    console.log(error);
  }
}



export default function* mySagas() {
  yield takeLatest(FETCH_USERS, fetchAllUsers);
  yield takeLatest(FETCH_ORDER, fetchAPIOrder);
  yield takeLatest(ADD_USER_REQUEST, pushUser);
}