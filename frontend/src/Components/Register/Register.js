import React, { Component } from "react";
import { Navigate ,Link} from "react-router-dom";
import axios from "axios";
import "./Register.css";
import config from "../../services/config.json"

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      pass_word: "",
      registrationError: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ user_name: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ pass_word: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.api_base_url}/user/signup`, {
        user_name: this.state.user_name,
        pass_word: this.state.pass_word,
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
              value={this.state.user_name}
              onChange={this.handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={this.state.pass_word}
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
