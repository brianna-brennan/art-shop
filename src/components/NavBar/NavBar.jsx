import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import './NavBar.css';
function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
       <span>Welcome, {user.name}!</span>
      &nbsp; | &nbsp;
      <Link className="nav-neworder" to="/orders/new" >New Order</Link>
      &nbsp; | &nbsp;
      <Link className="nav-orderhistory" to="/orders">Order History</Link>
      &nbsp; | &nbsp;
    
      <Link className="logout" onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  )
}

export default NavBar;