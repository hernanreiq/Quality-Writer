import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./views/partials/nav";
import Header from "./views/partials/header";
import Index from "./views";
import About from "./views/about";
import Error from "./views/error";
import CRUD from "./views/crud";

class Router extends Component {
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                <Nav />
                <Header />
                    <Switch>
                        <Route exact path="/" component={Index} />
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
                        <Route exact path="/home" component={Index} />
                        <Route exact path="/about" component={About} />
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Router;