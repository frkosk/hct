import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { fetchAllUsers } from './actions/index';

import UserList from './containers/UserList';
import UserOrder from './containers/UserOrder';
import AddUser from './containers/AddUser';
import Nav from './components/Nav';

import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllUsers());

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <UserList />
            <UserOrder />
            <AddUser />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
