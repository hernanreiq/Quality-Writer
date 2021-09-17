import React, { Component } from "react";
import Create from "./partials/crud_create";
import Search from "./partials/search/search";

class CRUD extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Create />
                        <Search />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CRUD;