import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReeValidate from 'ree-validate';
import classnames from 'classnames';
import { pushUser } from '../actions';

class AddUser extends Component {

  constructor(props) {
    super(props);

    this.validator = new ReeValidate({
      name: 'required|min:5',
      phone: 'required|numeric|min:5',
    })
    // ^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\s?\(\d+\))?(?:[-\/\s.]|\d)+$
    this.state = {
      formData: {
        name: '',
        phone: '',
      },
      errors: this.validator.errors,
    }

    this.onChange = this.onChange.bind(this)
    this.validateAndSubmit = this.validateAndSubmit.bind(this)
  }

  onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const { errors } = this.validator

    // reset errors for url field
    errors.remove(name)

    // update form data
    this.setState({ formData: { ...this.state.formData, [name]: value } })

    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }

  validateAndSubmit = (e) => {
    e.preventDefault()

    const { formData } = this.state
    const { errors } = this.validator

    this.validator.validateAll(formData)
      .then(success => {
        if (success) {
          const user = {
            name: formData.name,
            phone: formData.phone
          };
          this.props.pushUser(user)
        } else {
          this.setState({ errors })
        }
      })

  }

  render() {
    const { errors } = this.state
    return (
      <form className="col-sm-3" onSubmit={this.validateAndSubmit}>
        <h1>Add User</h1>
        <div className="form-row">
          <div className="">
            <label className="mr-sm-2" htmlFor="name">Name</label>
            <input ref='name' name='name' className={classnames('form-control mb-2', { 'is-invalid':  errors.has('name')})} type='text' onChange={this.onChange} required />
            { errors.has('name') &&
            <span className="invalid-feedback">{ errors.first('name') }</span>
            }
          </div>
          <div className="">
            <label className="mr-sm-2" htmlFor="phone">Phone</label>
            <input ref='phone' name='phone' className={classnames('form-control mb-2', { 'is-invalid':  errors.has('phone')})} type='text' onChange={this.onChange} required />
            { errors.has('phone') &&
            <span className="invalid-feedback">{ errors.first('phone') }</span>
            }
          </div>
        </div>
        <button className="btn btn-primary" type='submit'>Add</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  pushUser : pushUser
  }, dispatch);
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AddUser)