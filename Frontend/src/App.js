//import logo from './logo.svg';
import './App.css';
import "./styles.css";
import Navbar from "./comp/Navbar.js";
import axios from "axios";
import { useEffect, useState } from 'react';
import Home from './routes/home.js';
import About from './routes/About.js';
import Contract from './routes/Contract.js';
import Service from './routes/Services.js';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [data, setData] = useState();

  //Define getData before useEffect
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/service" element={<Service/>}/>
        <Route path = "/contract" element={<Contract/>}/>
      </Routes>
      
        {data}
    </div>

  );
}
// 
  // { <footer class="bg-dark text-white text-center p-3">
  //       <div class="container">
  //           &copy; 2025 Parit Rungrueang
  //       </div>
  //   </footer> }



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
      // {/<div>
      //   <h1 className="allcard" >
      //     <div className="card"><img src="https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg" alt="A" height={150}></img></div>
      //     <div className="card"><img src="https://cdn.pixabay.com/photo/2022/11/05/19/56/bachalpsee-7572681_1280.jpg" alt="A" height={150}></img></div>
      //     <div className="card"><img src="https://cdn.pixabay.com/photo/2024/10/23/09/00/dorset-9141987_1280.jpg" alt="A" height={150}></img></div>
      //     <div className="card"><img src="https://cdn.pixabay.com/photo/2021/08/01/17/31/path-6514885_1280.jpg" alt="A" height={150}></img></div>
          
      //    </h1>
      // </div> }