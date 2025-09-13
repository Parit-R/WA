import { useEffect, useState } from "react";
import Card from "../comp/Card";
function About() {
    const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/About")
      .then(res => res.json())
      .then(data => setRows(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {rows.map((row) => (
        <Card 
          key={row.id} 
          name={row.name} 
          text={row.text} 
          url={row.url} 
        />
      ))}
    </div>
  );
}

export default About;