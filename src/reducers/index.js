import { combineReducers } from 'redux'
import users from './usersReducer'
import order from './orderReducer'

export default combineReducers({
  users,
  order
})
