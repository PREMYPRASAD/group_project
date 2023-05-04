import React, { Component } from "react";
import { Navigate ,Link} from "react-router-dom";
import axios from "axios";
import "./Register.css";
import config from "../../services/config.json"

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      registrationError: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.api_base_url}/user/signup`, {
        username: this.state.username,
        password: this.state.password,
      }, { withCredentials: true });
      if (response.status === 201) {
        Navigate("/login");
      } else {
        const data = response.data;
        this.setState({ registrationError: data.message });
      }
    } catch (error) {
      console.error(error);
      this.setState({
        registrationError: "An error occurred while registering.",
      });
    }
  };

  render() {
    return (
      <div className="background-container">
        <form onSubmit={this.handleSubmit} className="register-form">
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          {this.state.registrationError && (
            <div className="error-message">{this.state.registrationError}</div>
          )}

          <div className="login-link">
            Already have an account? <Link  to="/login"  style={{ textDecoration: 'none' ,color:'red'}}>Login</Link>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
