import React, { useState } from 'react';
import './login.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', username: '' }); // reset form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle auth logic: call backend API for login/signup
    if (isLogin) {
      console.log('Logging in:', formData);
    } else {
      console.log('Signing up:', formData);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login to JobEasy" : "Create Your Account"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        )}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <div className="auth-toggle">
        {isLogin ? "Don't have an account?" : "Already have an account?"} 
        <span onClick={toggleForm}>
          {isLogin ? " Sign up" : " Login"}
        </span>
      </div>
    </div>
  );
};

export default LoginSignup;
