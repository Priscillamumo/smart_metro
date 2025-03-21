import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-register-container">
      <div className="image-container"></div>
      <div className="form-container">
        <div className="form-box">
          {isLogin ? (
            <form className="login-form">
              <h2>Login</h2>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
              <p>
                Don't have an account? <span onClick={toggleForm}>Register here</span>
              </p>
            </form>
          ) : (
            <form className="register-form">
              <h2>Register</h2>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Register</button>
              <p>
                Already have an account? <span onClick={toggleForm}>Login here</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;