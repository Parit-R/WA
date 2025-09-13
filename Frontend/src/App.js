//import logo from './logo.svg';
import './App.css';
import "./styles.css";
//import axios from "axios";
//import { useEffect, useState } from 'react';
import Navbar from "./comp/Navbar.js";
import Home from './routes/home.js';
import About from './routes/About.js';
import Contract from './routes/Contract.js';
import Service from './routes/Services.js';
import Register from "./routes/Register.js";
import Login from './routes/Login.js';
import TestR from './routes/testR.js';
import Add from './routes/add.js'

import { Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar> 
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/service" element={<Service/>}/>
        <Route path = "/contract" element={<Contract/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/testR" element={<TestR/>}/>
      </Routes>
      
      <footer className="bg-dark text-white text-center " style={{marginTop: 100}}>
            &copy; 2025 Parit Rungrueang
      </footer>
    </div>

  );
}



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
      
      // </div> }


        // const [data, setData] = useState();

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/getData");
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
