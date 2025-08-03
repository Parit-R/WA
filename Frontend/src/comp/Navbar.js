import './NavbarStyles.css'; 
import { Component } from "react"; //use Component class form the react
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    //it like use render funtion to show the UI
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Title</h1>
      
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className = {item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
           <li>
            <Link to="/Login">
              <button>Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
//.map() วนแต่ละสมาชิกแล้วทำเป็น <li> ใหม่
export default Navbar; //basicly allow other file to asses Navbar
