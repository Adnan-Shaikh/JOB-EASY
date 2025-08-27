import React from 'react';
import './home.css';

const Home = () => (
  <div className="landing-container">
    <header className="hero">
      <h1>Find Part-Time Jobs Made Easy</h1>
      <p>Connecting you with local cafes, retail shops, clinics, and more—all in one place.</p>
      
    </header>

    <section className="how-it-works">
      <h2>How JobEasy Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Search Nearby Jobs</h3>
          <p>Find part-time roles around you.</p>
        </div>
        <div className="step">
          <h3>2. Apply Quickly</h3>
          <p>Send applications in just a few taps.</p>
        </div>
        <div className="step">
          <h3>3. Get Hired</h3>
          <p>Receive offers and start working fast.</p>
        </div>
      </div>
    </section>

    <section className="employers">
      <h2>Are You An Employer?</h2>
      <p>Post your part-time openings easily and find the right candidates quickly.</p>
      <button onClick={() => window.location.href = '/post-job'}>Post a Job</button>
    </section>

    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      {/* Example job cards here */}
      <div className="job-card">
        <h3>Barista - Cozy Cafe</h3>
        <p>Location: Downtown</p>
        <p>Part-time, Flexible hours</p>
        <button>Apply Now</button>
      </div>
      <div className="job-card">
        <h3>Retail Assistant - Local Shop</h3>
        <p>Location: Main Street</p>
        <p>Part-time, Weekends</p>
        <button>Apply Now</button>
      </div>
    </section>

    <footer className="call-to-action">
      <button onClick={() => window.location.href = '/login'}>Job Seeker Login</button>
      <button onClick={() => window.location.href = '/login'}>Employer Login</button>
    </footer>
  </div>
);

export default Home;
