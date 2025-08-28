import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // <-- call hook here at top level

  return (
    <div className="landing-container">
      <header className="hero">
        <div className="parent">
          <div className="child_left">
            <div className="left_content">
              <h1>Finding Part-Time Jobs Made Easy With JobEasy</h1>
            </div>
            <div className="para">
              <p>Connecting you with local cafes, retail shops, clinics, and more—all in one place.</p>
            </div>
          </div>
          <div className="child_right">
            <img id="landing_image" src="/landing2.jpg" alt="Error" />
          </div>
        </div>
      </header>

      <button
        id="get_started_btn"
        onClick={() => {
          navigate('/login'); // <-- use navigate here
        }}
      >
        Get Started
      </button>

      {/* The rest of your sections */}
      <section className="how-it-works">
        <h2>How JobEasy Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Create an Account </h3>
            <p>Make an account Before Applying for jobs</p>
            <button id="Apply" onClick={() => {navigate('/login');}}> Click Apply </button>
          </div>
          <div className="step">
            <h3>2. Apply Quickly</h3>
            <p>Select available job as per your preference</p>
            <button id="Apply" onClick={() => {navigate('/jobs');}}> Peak Jobs </button>
          </div>
          <div id="step3">
            <h3>3. Get Hired</h3>
            <p>Start working fast.</p>
          </div>
        </div>
      </section>

      <section className="employers">
        <h2>Are You An Employer?</h2>
        <p>Post your part-time openings easily and find the right candidates quickly.</p>
        <button onClick={() => window.location.href = '/post-job'}>Post a Job</button>
      </section>


      <footer className="call-to-action">
        <button onClick={() => window.location.href = '/login'}>Job Seeker Login</button>
        <button onClick={() => window.location.href = '/login'}>Employer Login</button>
      </footer>
    </div>
  );
};

export default Home;
