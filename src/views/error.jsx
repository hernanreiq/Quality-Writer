import React, { Component } from "react";

class Error extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="container p-4">
                    <h1>This page does not exist</h1>
                </main>
            </React.Fragment>
        )
    }
}

export default Error;