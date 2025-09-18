import './login.css';

const Signupform = () => {
  return (
    <div className="Form-container">
      <form action="/signup" className="Box" method="POST">
        <h2 className="title">Create Your Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="input"
        />

        <button type="submit" className="login-btn">Sign Up</button>

        <p className="signup-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signupform;
