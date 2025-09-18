import React from "react";
import "./../App.css";

function ObjectCard({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ObjectCard;
