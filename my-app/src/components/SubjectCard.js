import React from "react";
import "./../App.css";

function SubjectCard({ subject, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={subject} />
      <div className="card-content">
        <h3>{subject}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SubjectCard;
