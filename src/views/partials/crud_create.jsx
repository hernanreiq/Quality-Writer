import React, { Component } from "react";

class Create extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card shadow my-5">
                                <div className="card-header bg-success text-center">
                                    <h2 className="card-title mb-1">Create a new post</h2>
                                </div>
                                <div className="card-body">
                                    <h3>Content!</h3>
                                </div>
                                <div className="card-footer">
                                    <a href="/home" className="btn btn-primary w-100 my-2 shadow">Home</a>
                                    <a href="/home" className="btn btn-info w-100 my-2 shadow">Reset</a>
                                    <a href="/home" className="btn btn-success w-100 my-2 shadow">Create this post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Create;