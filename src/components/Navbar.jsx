import React from "react";
import { Link } from "react-router-dom";
import * as userService from '../utilities/users-service'
function Navbar({user ,setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <nav style={{ justifyContent: "space-evenly", alignItems: "center", display: "flex" }}>

      <div style={{justifyContent:'space-around'}}>
        <p className="user-welcome">Welcome {user.name}</p>
        <p className="user-email">Logged In: {user.email}</p>
        <Link to="" onClick={handleLogOut}><button className="logout-button">Log Out</button></Link>
      </div>

        <Link to="/todo">To-do List</Link>

        <Link to="/todo/new">New Item</Link>
      </nav>
    </>
  );
}

export default Navbar;
