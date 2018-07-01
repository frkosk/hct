import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import mySagas from './sagas';

import UserList from './containers/UserList';
import UserOrder from './containers/UserOrder';
import AddUser from './containers/AddUser';
import Nav from './components/Nav';

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run( mySagas );

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
