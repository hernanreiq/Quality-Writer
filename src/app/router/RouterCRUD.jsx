import React, { Component } from "react";
import { Route } from 'react-router-dom';
import CRUD from "../views/crud";

class RouterCRUD extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/crud/create" >
                    <CRUD view="Create" />
                </Route>
                <Route exact path="/crud/read" >
                    <CRUD view="Read" />
                </Route>
                <Route exact path="/crud/update" >
                    <CRUD view="Update" />
                </Route>
                <Route exact path="/crud/delete" >
                    <CRUD view="Delete" />
                </Route>
            </React.Fragment>
        )
    }
}

export default RouterCRUD;