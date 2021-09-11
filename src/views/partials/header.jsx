import React, { Component } from "react";

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <header>
                    <div className="container p-4">
                        <h1 className="display-5 text-center">New content every day, all the time!</h1>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;