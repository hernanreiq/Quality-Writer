import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RouterCRUD from "./RouterCRUD";
import Nav from "../views/partials/nav";
import Index from "../views";
import About from "../views/about";
import Error from "../views/error";

class Router extends Component {
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                <Nav />
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/home" component={Index} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/error" component={Error} />
                        <RouterCRUD />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Router;