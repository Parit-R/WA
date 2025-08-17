import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import axios from 'axios';

function SignIn() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/SignIn', values)
      .then(res => {
        console.log('Sign In successful:');
        navigate("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container" id="signup">
      <h1 className="form-title">Register</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Name" required
            onChange={e => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email"></label>
          <input
            type="email" id="email" name="email" placeholder="Email" required
            onChange={e => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password"></label>
          <input
            type="password" id="password" name="password" placeholder="Password" required
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
        </div>

        <button type='submit'>Sign In</button>
      </form>

      <div className="links">
        <p>
          Already Have Account?
          <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
