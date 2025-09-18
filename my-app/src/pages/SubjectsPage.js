import React, { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard";
import "./../App.css";

function SubjectPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/data/subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  return (
    <div>
      <h2 className="section-title">What is the Course Program?</h2>
      <div className="grid">
        {subjects.map((subj) => (
          <SubjectCard key={subj.id} {...subj} />
        ))}
      </div>
    </div>
  );
}

export default SubjectPage;
