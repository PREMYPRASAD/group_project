import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from "../../services/config.json";
import './Login.css'
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
  const [user_name, setUsername] = useState('');
  const [pass_word, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${config.api_base_url}/user/login`)
      .then(response => {
        if (response.data.loggedIn) {
          navigate('/home');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${config.api_base_url}/user/login`, { user_name, pass_word })
      .then(response => {
        console.log(response)
        if (response.data.success) {
          navigate('/home');
        } else {
          alert('Login failed. Please try again.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h1 className="Auth-form-title">LOGIN</h1>
          <label>
            Username:
            <input type="text" value={user_name} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={pass_word} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Login</button>
          <p className="forgot-password text-right mt-4" style={{marginTop:'10px'}}>
            SignUp Here!! <Link to="/signup">signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
