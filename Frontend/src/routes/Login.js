import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/Login', values)
      .then(res => {
        console.log("Backend response:", res.data);
        if(res.data.Status === "Success"){
          navigate("/");
          console.log("Login Success");
        }else{
          alert(res.data.Error);
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <div className="container" id="signin">
        <h1 className="form-title">Login</h1>
        <form method="post" action="" onSubmit={handleSubmit}>

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

          <button type='submit'>Login</button>
        </form>
        <div className="links">
          <p>
            Don t Have Account?
            <Link to="/Register">Register</Link>
            
          </p>
        </div>
      </div>
    </>
  )
}

export default Login;