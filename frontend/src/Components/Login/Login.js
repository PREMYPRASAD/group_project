import React, { Component } from 'react';
import axios from 'axios';
import config from "../../services/config.json";
import './Login.css'
import { Navigate ,Link} from "react-router-dom"

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`${config.api_base_url}/user/login`)
      .then(response => {
        if (response.data.loggedIn) {
          Navigate('/home');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;

    axios.post(`${config.api_base_url}/user/login`, { username, password })
      .then(response => {
        if (response.data.success) {
          Navigate('/home');
        } else {
          alert('Login failed. Please try again.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="Auth-form-container">
      <form onSubmit={this.handleSubmit} className="Auth-form">
      <div className="Auth-form-content">
        <h1 className="Auth-form-title">LOGIN</h1>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
        <p className="forgot-password text-right mt-4" style={{marginTop:'10px'}}>
            SignUp Here!! <a href="#">signup</a>
          </p>
        </div>
      </form>
      </div>

    );
  }
}

export default LoginPage;
