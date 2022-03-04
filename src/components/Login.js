import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
  };

  handleLogin = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <form className='container' name='login' onSubmit={this.handleLogin}>
        <p>
          <label htmlFor='email'>Email: </label>
          <input type="email" onChange={(event) => this.setState({ email: event.target.value })} />
        </p>
        <p>
          <label htmlFor='password'>Password: </label>
          <input type="password" onChange={(event) => this.setState({ password: event.target.password })} />
        </p>
        <p>
          <button type='submit' disabled={ !this.state.email && !this.state.password }>Login</button>
        </p>
      </form>
    )
  }
}
