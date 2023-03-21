import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem('userLoggedIn', true);
    setUsername('');
    setPassword('');
    navigate('/rentals');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');
    window.location.href = 'http://localhost:3000';
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-3 bg-light">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-5"
          onClick={handleClick}
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
