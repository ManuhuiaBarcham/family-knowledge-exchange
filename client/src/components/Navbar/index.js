import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./navbarelements";
import "../Navbar/css.css"


const Navbars = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Nav>
        <div className="dropdown">
          <button className="dropbtn"><Bars /></button>
          <div className="dropdown-content">
              <NavLink to="/">
                Home
              </NavLink>
              <NavLink to="/contact">
                Contact Us
              </NavLink>
              <NavLink to="/login">
                Login
              </NavLink>
              <NavLink to="/signup">
                Signup
              </NavLink>
              <NavBtn>
                {Auth.loggedIn() ? (
                  <>
                    <Link className="btn btn-lg btn-info m-2" to="/me">
                      {Auth.getProfile().data.username}'s profile
                    </Link>
                    <button className="btn btn-lg btn-light m-2" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                      <NavLink to="/login">
                        Login
                      </NavLink>
                      <NavLink to="/signup">
                        Signup
                      </NavLink>
                  </>
                )}
              </NavBtn>
          </div>
        </div>


        <NavMenu>

          <NavLink to="/" >
            Home
          </NavLink>
          <NavLink to="/contact" >
            Contact Us
          </NavLink>
          <NavBtn>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  Login
                </NavLink>
                <NavLink to="/signup">
                  Signup
                </NavLink>
              </>
            )}
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );


};


export default Navbars;