import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';

const mapStateToProps = state => {
  return {
    users: state.users
  }
};

class UserList extends Component {
  render() {
    return (
      <div className="col-sm-5">
      <h1>Contacts</h1>
      <div className="card">
        <ul className="list-group list-group-flush">
          {this.props.users.map(user => (
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

export default connect (
  mapStateToProps
)(UserList);
