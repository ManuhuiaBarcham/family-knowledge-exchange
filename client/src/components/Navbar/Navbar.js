import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavForm } from "./navbarelements"
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1 >Family Knowledge Exchange</h1>
                </NavLink>
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

                    <NavForm>
                        <form class="form-inline needs-validation" novalidate>
                            <div class="col-md-10 mb-3 form-inline">
                                <label for="validationTooltipUsername"> </label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="validationTooltipUsernamePrepend"><i class="fas fa-search"></i></span>
                                    </div>
                                    <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Search" aria-describedby="validationTooltipUsernamePrepend" required></input>
                                    <div class="invalid-tooltip">
                                        Please choose a unique and valid username.
                                    </div>
                                </div>
                            </div>
                        </form>
                    </NavForm>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin"> Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );

};

export default Navbar;