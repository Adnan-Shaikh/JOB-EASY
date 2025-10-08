import React from "react";
import "./home.css";

const Team = () => {
  const members = [
    { name: "Adnan Shaikh", role: "CEO and Developer", img: "/Adnan.png" },
    { name: "Mohammad Memon", role: "Co-Founder and AI engineer", img: "/Mohammad.jpg" },
    { name: "Rahul Gupta", role: "Dalal Media Team", img: "/Rahul.png" },
    { name: "Sairaj Pavnak", role: "AI support", img: "/Sairaj.jpg" },
    { name: "Chetan Khamkar", role: "Lode ka Legal Advisor", img: "/khamkar.png" },
  ];

  return (
    <div className="team-section">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {members.map((m, i) => (
          <div className="team-card" key={i}>
            <img src={m.img} alt={m.name} />
            <h2>{m.name}</h2>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
