// import React from "react";
// import "./findjobs.css";

// const FindJobs = () => {
//   return (
//     <div className="findjobs-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h3>Filters</h3>
//         <div className="filter-group">
//           <label>Job Type</label>
//           <select>
//             <option>All</option>
//             <option>Part-Time</option>
//             <option>Full-Time</option>
//             <option>Internship</option>
//           </select>
//         </div>
//         <div className="filter-group">
//           <label>Location</label>
//           <input type="text" placeholder="Enter city" />
//         </div>
//         <button className="apply-btn">Apply Filters</button>
//       </aside>

//       {/* Job Listings */}
//       <main className="jobs-list">
//         <div className="job-card">
//           <h2>Cashier at Local Cafe</h2>
//           <p>Location: Mumbai</p>
//           <p>Type: Part-Time</p>
//           <p>Salary: ₹8,000/month</p>
//           <button>View Details</button>
//         </div>

//         <div className="job-card">
//           <h2>Retail Store Helper</h2>
//           <p>Location: Palghar</p>
//           <p>Type: Full-Time</p>
//           <p>Salary: ₹12,000/month</p>
//           <button>View Details</button>
//         </div>

//         <div className="job-card">
//           <h2>Car Wash Assistant</h2>
//           <p>Location: Boisar</p>
//           <p>Type: Part-Time</p>
//           <p>Salary: ₹6,000/month</p>
//           <button>View Details</button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FindJobs;
import React, { useState, useMemo } from "react";
import "./findjobs.css";

const FindJobs = () => {
  const jobsData = [
    { id: 1, title: "Cashier at Local Cafe", location: "Mumbai", type: "Part-Time", salary: "₹8,000/month" },
    { id: 2, title: "Retail Store Helper", location: "Palghar", type: "Full-Time", salary: "₹12,000/month" },
    { id: 3, title: "Car Wash Assistant", location: "Boisar", type: "Part-Time", salary: "₹6,000/month" },
    { id: 4, title: "Receptionist", location: "Pune", type: "Full-Time", salary: "₹10,000/month" },
  ];

  const [filters, setFilters] = useState({ type: "All", location: "" });

  const filteredJobs = useMemo(() => {
    let results = jobsData;
    if (filters.type !== "All") {
      results = results.filter((job) => job.type === filters.type);
    }
    if (filters.location.trim() !== "") {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    return results;
  }, [jobsData, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="find-jobs-page">
      {/* Sidebar Filters */}
      <div className="filter-section">
        <h3>Filters</h3>
        <label>Job Type</label>
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>

        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter city"
          value={filters.location}
          onChange={handleFilterChange}
        />
        {/* NO Apply Filters button needed */}
      </div>
      {/* Job Listings */}
      <div className="jobs-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <button className="details-btn">View Details</button>
            </div>
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default FindJobs;
