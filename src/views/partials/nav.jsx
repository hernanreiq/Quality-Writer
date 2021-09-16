import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand"><i>Quality Writer</i></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/home" activeClassName="active" className="nav-link h6 mb-0">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/search" activeClassName="active" className="nav-link h6 mb-0">Search</NavLink>
                                </li>
                                <li className="nav-item">   
                                    <NavLink to="/crud" activeClassName="active" className="nav-link h6 mb-0">CRUD</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" activeClassName="active" className="nav-link h6 mb-0">About</NavLink>
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