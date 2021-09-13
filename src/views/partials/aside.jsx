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
                            <h2 className="card-title mb-1">Search a post</h2>
                        </div>
                        <div className="card-body">
                                <input type="text" className="w-100 my-2 py-1 px-2" id="search_input" placeholder="Write anything" />
                        </div>
                    </div>
                    <div className="card shadow mb-5">
                        <div className="card-header">
                            <h2 className="card-title mb-1">CRUD</h2>
                        </div>
                        <div className="card-body">
                            <a href="/crud/create" className="btn btn-success w-100 my-2">Create a new post</a>
                            <a href="/crud/read" className="btn btn-info w-100 my-2">View all posts</a>
                            <a href="/crud/update" className="btn btn-primary w-100 my-2">Update a post</a>
                            <a href="/crud/delete" className="btn btn-danger w-100 my-2">Delete a post</a>
                        </div>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}

export default Aside;