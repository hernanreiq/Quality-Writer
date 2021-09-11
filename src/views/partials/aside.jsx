import React, { Component } from "react";

class Aside extends Component {
    render(){
        return(
            <React.Fragment>
                <aside className="p-3">
                    <div className="card shadow">
                        <div className="card-header">
                            <h2 className="card-title mb-1 text-center">Topics</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><a href="/sciences">Sciences</a></li>
                            </ul>
                            <ul>
                                <li><a href="/technologies">Technologies</a></li>
                            </ul>
                            <ul>
                                <li><a href="/business">Business</a></li>
                            </ul>
                            <ul>
                                <li><a href="/cinema">Cinema</a></li>
                            </ul>
                            <ul>
                                <li><a href="/curiosities">Curiosities</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}

export default Aside;