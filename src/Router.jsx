import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./views/partials/nav";
import Index from "./views";

class Router extends Component {
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                <Nav />
                    <Switch>
                        <Route exact path="/" component={Index} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Router;