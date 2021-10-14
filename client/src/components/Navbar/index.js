import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./navbarelements"
const Navbars = () => {
    const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
    return (
        <>
            <Nav>
                
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>

                    <NavLink to="/sign-up" activeStyle>
                        Join Us
                    </NavLink>

                   
                </NavMenu>
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
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
                </NavBtn>
            </Nav>
        </>
    );

};

export default Navbars;