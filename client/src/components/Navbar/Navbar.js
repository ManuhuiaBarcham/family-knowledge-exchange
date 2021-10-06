import React, { Component } from "react";
import { MenuItems } from "./Menuitems";
import "./Namvbar.css";




class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> Family  Knowledge Exchange </h1>
                
                <ul>
                    {MenuItems.map((item, index) => {
                        return <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                                
                            </a>

                            </li>
                            
                    })}
                    <form class="form-inline mx-auto">
                            <input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                </ul>
            </nav>
        )
    }
}

export default Navbar;