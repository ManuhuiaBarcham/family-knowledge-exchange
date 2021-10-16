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


        <div class="dropdown">
          <button class="dropbtn"><Bars /></button>
          <div class="dropdown-content">
            <a >
              <NavLink to="/" activeStyle>
                Home
              </NavLink>
            </a>
            <a >
              <NavLink to="/contact" activeStyle>
                Contact Us
              </NavLink></a>

            <a >
              <NavLink to="/login">
                Login
              </NavLink>
            </a>
            <a >
              <NavLink to="/signup">
                Signup
              </NavLink>
            </a>
            <a >
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
                    <a >
                      <NavLink to="/login">
                        Login
                      </NavLink></a>
                    <a >
                      <NavLink to="/signup">
                        Signup
                      </NavLink></a>
                  </>
                )}
              </NavBtn>
            </a>

          </div>
        </div>


        <NavMenu>

          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle>
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