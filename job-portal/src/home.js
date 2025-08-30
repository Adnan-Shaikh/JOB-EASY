import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
   
  return (
    <div className="landing-container">
      <header className="hero">
        <div className="parent_landing">
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
  <div className="parent_employer">
    {/* LEFT: image */}
    <div className="left_img">
      {/* put your image in /public/assets and use that path */}
      <img src="/NEEDAJOB.png" alt="Employers illustration" />
    </div>

    {/* RIGHT: content card */}
    <div className="right_content">
      <h2>Are You An Employer?</h2>
      <p className="lead">
        Post your part-time openings easily and find the right candidates quickly.
      </p>
      <ul className="benefits">
        <li>Reach thousands of job seekers</li>
        <li>Post jobs in under 2 minutes</li>
        <li>Hire fast with JobEasy’s matching system</li>
      </ul>

      <button className="cta" onClick={() => navigate('/post-job')}>
        Post a Job
      </button>
    </div>
  </div>
</section>

<section className="feedback-Carousel">
  <h2>What Our Users Say</h2>
  <div className="carousel">
    <div className="carousel-track">
      <div className="card">
        <img src="/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background.png" alt="Chetan" />
        <h3>Chetan</h3>
        <p>
          JobEasy helped me land a part-time café job within 3 days. Super
          simple process!
        </p>
      </div>
      <div className="card">
        <img src="/pexels-ketut-subiyanto-4307884.png" alt="Mohammad" />
        <h3>Mohammad</h3>
        <p>
          Posting jobs as an employer is very smooth. Found the right candidate
          quickly.
        </p>
      </div>
      <div className="card">
        <img src="/pexels-linzfrancis-3379613-removebg-preview.png" alt="Devanshoo" />
        <h3>Devanshoo</h3>
        <p>
          Great experience! The matching system is spot on, saved me so much
          time.
        </p>
      </div>
      <div className="card">
        <img src="smiling-caucasian-guy-with-beard-looking-happy.png" alt="Sai-raj" />
        <h3>Sai-raj</h3>
        <p>
          I applied to 3 part-time jobs and got hired in less than a week!
        </p>
      </div>
      <div className="card">
        <img src="/young-bearded-man-with-striped-shirt_compress.png" alt="Palash" />
        <h3>Palash</h3>
        <p>
          Highly recommend JobEasy for both employers and job seekers. Super
          easy!
        </p>
      </div>
    </div>
  </div>
</section>


      <footer className="call-to-action">
        <button onClick={() => window.location.href = '/login'}>Job Seeker Login</button>
        <button onClick={() => window.location.href = '/login'}>Employer Login</button>
      </footer>
    </div>
  );
};

export default Home;
