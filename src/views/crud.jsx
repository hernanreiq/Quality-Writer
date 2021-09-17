import React, { Component } from "react";
import Create from "./partials/crud/crud_create";
import Read from "./partials/crud/crud_read";

class CRUD extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Create />
                        <Read />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CRUD;