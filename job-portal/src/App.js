import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import FindJobs from './findjobs';
import PostJob from './postjobs';
// import EmployeeProfile from './profile';
import Login from './login';
import Signup from './signup';
import Team from './team';
import Terms from './terms';
import protectedroutes from "./ProtectedRoute"

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '70px' }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<FindJobs />} />
        <Route path="/post-job" element={<PostJob />} />
        {/* <Route path="/profile" element={<EmployeeProfile />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/team' element={<Team/>}/>
        <Route path='/terms' element={<Terms/>}/>
        {/* Optional: Add a fallback 404 page route */}
        <Route path="*" element={<div><h1>Page Not Found</h1></div>} />
        <Route path="/jobs" element={ <ProtectedRoute> <FindJobs /> </ProtectedRoute> }/>
      </Routes>
    </Router>
  );
}

export default App;
