import { ADD_USER, FETCH_USERS, FETCH_ORDER } from './types';
import axios from 'axios';

const USERS_API_URL = 'http://private-36f1e-contactstest.apiary-mock.com/contacts';

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    users: users.items
  }
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return axios.get(USERS_API_URL)
      .then(response => {
        dispatch(fetchUsers(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const dispatchOrder = (order) => {
  return {
    type: FETCH_ORDER,
    order : order.items
  }
}

export const fetchOrder = (id) => {
  return(dispatch) => {
    return axios.get(`${USERS_API_URL}/${id}/order`)
      .then(response => {
        dispatch(dispatchOrder(response.data))
      })
      .catch(error => {
        throw(error);
      });
  }
};

export const pushUserAsync = (user) => {
  return {
    type: ADD_USER,
    users: user
  }
}

export const pushUser = (user) => {
  return dispatch => {
    console.log(user)
    return axios.post(USERS_API_URL, JSON.stringify(user))
      .then(response => {
        user.id = Date.now();
        // pripajam id aby to malo nejaké id ked uz api nic nevracia
        dispatch(pushUserAsync(user));
      });
  }

}