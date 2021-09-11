import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Nav;