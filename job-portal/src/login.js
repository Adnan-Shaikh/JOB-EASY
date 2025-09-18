// import './login.css';

// const Loginform = () => {
//   return(
//     <div className='Form-container'>
//       <Form action="/login" className='Box' method='POST'>

//       </Form>
//     </div>
//   );

// };

// export default Loginform;

import './login.css';

const Loginform = () => {
  return (
    <div className="Form-container">
      <form action="/login" className="Box" method="POST">
        <h2 className="title">Login to JobEasy</h2>

        <input type="email" name="email" placeholder="Email address" required className="input"/>

        <input type="password" name="password" placeholder="Password" required className="input" />

        <button type="submit" className="login-btn">Login</button>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Loginform;
