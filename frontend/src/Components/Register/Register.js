import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import "./Register.css";
import config from "../../services/config.json";

const Register = () => {
  const [user_name, setUsername] = useState("");
  const [pass_word, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${config.api_base_url}/user/signup`,
        {
          user_name,
          pass_word,
        }
      );
      if (response.data.success) {
        alert('Successfully registered');
        navigate("/");
      } else {
        const data = response.data;
        setRegistrationError(data.message);
      }
    } catch (error) {
      console.error(error);
      setRegistrationError("An error occurred while registering.");
    }
  };
  
  return (
    <div className="background-container">
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Username:
          <input
            type="text"
            value={user_name}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={pass_word}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        {registrationError && (
          <div className="error-message">{registrationError}</div>
        )}

        <div className="login-link">
          Already have an account?{" "}
          <Link to="/" style={{ textDecoration: "none", color: "red" }}>
            Login
          </Link>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

