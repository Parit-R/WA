import { Link } from "react-router-dom";
import "./SignUp.css";


function SignIn() {
  return (
    <>

        <div className="container" id="signup">
          <h1 className="form-title">Register</h1>
          <form method="post" action="">
            <div className="input-group">
              <input type="text" id="fname" name="fname" placeholder="Name" required />
              <label htmlFor="fname"></label>
            </div>
            <div className="input-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
              <label htmlFor="email"></label>
            </div>
            <div className="input-group">
              <input type="password" id="password" name="password" placeholder="Password" required />
              <label htmlFor="password"></label>
            </div>
            <input type="submit" className="btn" value="Sign up" name="signup" />
          </form>
          <div className="links">
            <p>
              Already Have Account?
              <Link to="/Login">Login</Link>
            </p>
          </div>
        </div>

    </>
  );
}

export default SignIn;
