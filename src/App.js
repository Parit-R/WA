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
import SignIn from "./routes/SignIn.js";

import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login.js';

export default function App() {
  // const [data, setData] = useState();

  // //Define getData before useEffect
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

  return (
    <div className="App">
      <Navbar> </Navbar> 
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/service" element={<Service/>}/>
        <Route path = "/contract" element={<Contract/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>
      
      
      
      
      <footer class="bg-dark text-white text-center p-3" style={{marginTop: 100}}>
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