import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../views/partials/nav";
import Index from "../views";
import About from "../views/about";
import Search from "../views/partials/search/search";
import CRUD from "../views/crud";
import Error from '../views/error';



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
                        <Route exact path="/crud" component={CRUD} />
                        <Route exact path="*" component={Error} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Router;