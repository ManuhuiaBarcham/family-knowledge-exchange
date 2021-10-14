import React from 'react';
import { Link } from 'react-router-dom';
import {Nav} from "./navbarelements"

import {NavLink} from "./navbarelements"

const Header = () => {
  
  return (
    <Nav >
      <NavLink to="/">
                    <h1 >Family Knowledge Exchange</h1>
                </NavLink>
    </Nav>
  );
};

export default Header;
