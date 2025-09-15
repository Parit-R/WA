import { useEffect, useState } from "react";
import Card from "../comp/Card";

function About() {
  /*const [rows, setRows] = useState([]); //ตั้งค่าเริ่มต้น array

  useEffect(() => {
    fetch("http://localhost:8081/About")
      .then(res => res.json())
      .then(data => setRows(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {rows.map((data) => ( 
        <Card 
          key={data.id} 
          name={data.name} 
          text={data.text} 
          url={data.url} 
        />
      ))}
    </div>
  );*/
}

export default About;
