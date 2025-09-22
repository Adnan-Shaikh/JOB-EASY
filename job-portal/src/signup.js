// import './login.css';

// const Signupform = () => {
//   return (
//     <div className="Form-container">
//       <form action="/signup" className="Box" method="POST">
//         <h2 className="title">Create Your Account</h2>

//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           required
//           className="input"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email address"
//           required
//           className="input"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//           className="input"
//         />

//         <button type="submit" className="login-btn">Sign Up</button>

//         <p className="signup-text">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signupform;

import './login.css';
import { useState } from 'react';
import axios from 'axios';

const Signupform = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // prevent HTML form submission
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/jobs');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error occurred');
    }
  };

  return (
    <div className="Form-container">
      <form onSubmit={handleSignup} className="Box">
        <h2 className="title">Create Your Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <button type="submit" className="login-btn">Sign Up</button>

        <p>{message}</p>

        <p className="signup-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signupform;
