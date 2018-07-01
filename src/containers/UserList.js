import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import User from '../components/User';

const requestUsersData = () => ({ type: 'FETCH_USERS' });

class UserList extends Component {

  componentDidMount() {
    this.props.requestUsersData();
  }

  render() {
    const { users = [] } = this.props.users;

    return (
      <div className="col-sm-5">
      <h1>Contacts</h1>
      <div className="card">
        <ul className="list-group list-group-flush">
          {users.map(user => (
            <User
            user={user}
            key={user.id}
            />
          ))}
        </ul>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestUsersData }, dispatch);;

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserList);
