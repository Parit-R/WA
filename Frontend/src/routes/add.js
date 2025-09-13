import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import axios from 'axios';

function Add() {
  const [values, setValues] = useState({
    name: '',
    text: '',
    url: ''
  })

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/add', values)
      .then(res => {
        if(res.data.Status === "Success"){
          navigate("/");
          console.log("Register Success");
        }else{
          alert("Already Exit");
        }
      })
      .catch(err => console.log(err));
  }

  return (

    <div className="container" id="signup">
      <h1 className="form-title">Add</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder="Name" required
            onChange={e => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div className="input-group">
          <input
            type="text" id="text" name="text" placeholder="text" required
            onChange={e => setValues({ ...values, text: e.target.value })}
          />
        </div>

        <div className="input-group">
          <input
            type="text" id="url" name="url" placeholder="url" required
            onChange={e => setValues({ ...values, url: e.target.value })}
          />
        </div>

        <button type='submit'>add</button>
      </form>
    </div>
  );
}

export default Add;
