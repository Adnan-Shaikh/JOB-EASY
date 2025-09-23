
// import './login.css';

// const Loginform = () => {
//   return (
//     <div className="Form-container">
//       <form action="/login" className="Box" method="POST">
//         <h2 className="title">Login to JobEasy</h2>

//         <input type="email" name="email" placeholder="Email address" required className="input"/>

//         <input type="password" name="password" placeholder="Password" required className="input" />

//         <button type="submit" className="login-btn">Login</button>

//         <p className="signup-text">
//           Don't have an account? <a href="/signup">Sign up</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Loginform;

import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent default HTML form submission
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token); // save JWT
      alert('Login successful!');
      navigate("/jobs")
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="Form-container">
      <form onSubmit={handleLogin} className="Box">
        <h2 className="title">Login to JobEasy</h2>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">Login</button>

        <p>{message}</p>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Loginform;
