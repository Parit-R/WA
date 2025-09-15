import './NavbarStyles.css';
import { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

axios.defaults.withCredentials = true;

function Navbar() {
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleLogout = () => {
    axios.post('http://localhost:8081/logout')
      .then(() => {
        setAuth(false);
        navigate("/register");
      })
      .catch(err => console.log(err));
  };
  let buttonToShow;

  if (auth) {
    buttonToShow = <button onClick={handleLogout}>Logout</button>;
  } else {
    buttonToShow = (
      <Link to="/Login">
        <button>Login</button>
      </Link>
    );
  }

  return (

    <nav className="NavbarItems">
      <h1 className="navbar-logo">Title</h1>

      <ul className="nav-menu">
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}

        <li>
          {buttonToShow}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
