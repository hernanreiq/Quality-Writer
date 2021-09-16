import React, { Component } from "react";

class Error extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="container p-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card shadow my-5">
                                <div className="card-header">
                                    <p className="display-3 text-center">Error 404</p>
                                </div>
                                <div className="card-body">
                                    <h2 className="h1 text-center font-play card-title mb-0">This page does not exist</h2>
                                </div>
                                <div className="card-footer">
                                    <a href="/home" className="btn btn-primary w-100 my-2 shadow">Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Error;