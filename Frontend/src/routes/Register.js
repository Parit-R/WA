import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import axios from 'axios';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/Register', values)
      .then(res => {
        if(res.data.Status === "Success"){
          navigate("/login");
          console.log("Register Success");
        }else{
          alert("Already Exit");
        }
      })
      .catch(err => console.log(err));
  }

  return (

    <div className="container" id="signup">
      <h1 className="form-title">Register</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder="Name" required
            onChange={e => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div className="input-group">
          <input
            type="email" id="email" name="email" placeholder="Email" required
            onChange={e => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div className="input-group">
          <input
            type="password" id="password" name="password" placeholder="Password" required
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
        </div>

        <button type='submit'>Register</button>
      </form>

      <div>
        <p>
          Already Have Account?
          <Link to="/Login">Login</Link>
        </p>
      </div>

    </div>
  );
}

export default Register;
