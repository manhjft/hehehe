import React, { useEffect, useState } from "react";
import ObjectCard from "../components/ObjectCard";
import "./../App.css";

function ObjectPage() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch("/data/objects.json")
      .then((res) => res.json())
      .then((data) => setObjects(data));
  }, []);

  return (
    <div>
      <h2 className="section-title">Who Should Learn Programming?</h2>
      <div className="grid">
        {objects.map((obj) => (
          <ObjectCard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default ObjectPage;
