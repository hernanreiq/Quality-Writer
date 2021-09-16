import React, { Component } from "react";
import Create from "./partials/crud/crud_create";
import Read from "./partials/crud/crud_read";
import Search from "./partials/search/search";
import Delete from "./partials/crud/crud_delete";

class CRUD extends Component {
    render() {
        return (
            <React.Fragment>
                <Create />
                <Read />
                <Search />
                <Delete />
            </React.Fragment>
        )
    }
}

export default CRUD;