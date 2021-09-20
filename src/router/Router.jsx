import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Nav from "../views/partials/nav";
import Index from "../views";
import About from "../views/about";
import CRUD from "../views/crud";
import Error from '../views/error';



class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route exact path="/home">
                            <Redirect to="/" />
                        </Route>
                        <Route exact path="/" render={() => {
                            var topic = "all";
                            return (<Index topic={topic} />)
                        }} />
                        <Route exact path="/topic/:topic" render={(props) => {
                            var topic = props.match.params.topic;
                            return (<Index topic={topic} />)
                        }} />
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