import React, { Component } from "react";

class Aside extends Component {
    render() {
        return (
            <React.Fragment>
                <aside>
                    <div className="card shadow mb-5">
                        <div className="card-header">
                            <h2 className="card-title mb-1">Topics</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><a href="/science">Science</a></li>
                            </ul>
                            <ul>
                                <li><a href="/technology">Technology</a></li>
                            </ul>
                            <ul>
                                <li><a href="/business">Business</a></li>
                            </ul>
                            <ul>
                                <li><a href="/cinema">Cinema</a></li>
                            </ul>
                            <ul>
                                <li><a href="/entertainment">Entertainment</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card shadow mb-5">
                        <div className="card-header">
                            <h2 className="card-title mb-1">CRUD for posts</h2>
                        </div>
                        <div className="card-body">
                            <a href="/crud" className="btn btn-success w-100 my-2">Create, Read, Update and Delete</a>
                        </div>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}

export default Aside;