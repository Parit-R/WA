import { Link } from "react-router-dom";

function Login (){
    return(
        <>
           <div className="container" id="signin">
          <h1 className="form-title">Login</h1>
          <form method="post" action="">
            <div className="input-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
              <label htmlFor="email"></label>
            </div>
            <div className="input-group">
              <input type="password" id="password" name="password" placeholder="Password" required />
              <label htmlFor="password"></label>
            </div>
            <input type="submit" className="btn" value="Sign in" name="signin" />
          </form>
          <div className="links">
            <p>
              Don t Have Account?
              <Link to="/SignIn">Register</Link>
            </p>
          </div>
        </div>
        </>
    )
}

export default Login;