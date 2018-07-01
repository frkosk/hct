import { RECEIVE_USERS, RECEIVE_ORDER, ADD_USER_SUCCESS } from './types';
import axios from 'axios';

const USERS_API_URL = 'http://private-36f1e-contactstest.apiary-mock.com/contacts';

// fetch users
export const fetchUsers = async () => {
  return axios.get(USERS_API_URL)
    .then(response => {
      return response.data.items;
    })
    .catch(error => {
      throw(error);
    });
};

export const receiveUsersData = data => ({ type: RECEIVE_USERS, data });

// fetch order
export const fetchOrder = (id) => {
 return axios.get(`${USERS_API_URL}/${id}/order`)
    .then(response => {
      return response.data.items;
    })
    .catch(error => {
      throw(error);
    });
};

export const receiveOrdersData = data => ({ type: RECEIVE_ORDER, data });

// add user
export const pushUserAsync = (user) => {
  return axios.post(USERS_API_URL, JSON.stringify(user))
    .then(response => {
      return response.status;
    })
    .catch(error => {
      throw(error);
    });
}

export const pushUserSucces = data => ({ type: ADD_USER_SUCCESS, data });
