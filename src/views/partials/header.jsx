import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container p-5">
                        <div className="container-heading">
                            <h1 className="display-5 text-center mx-3">New content every day, all the time!</h1>
                        </div>
                    </div>
                </header>
                <div className="orange-division"></div>
            </React.Fragment>
        )
    }
}

export default Header;