import React, { Component } from "react";

class Aside extends Component {
    render() {
        return (
            <React.Fragment>
                <aside>
                    <div className="card shadow mb-5">
                        <div className="card-header">
                            <h2 className="card-title mb-1">TOPICS</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><a href="/topic/science">Science</a></li>
                            </ul>
                            <ul>
                                <li><a href="/topic/technology">Technology</a></li>
                            </ul>
                            <ul>
                                <li><a href="/topic/business">Business</a></li>
                            </ul>
                            <ul>
                                <li><a href="/topic/cinema">Cinema</a></li>
                            </ul>
                            <ul>
                                <li><a href="/topic/entertainment">Entertainment</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </React.Fragment>
        )
    }
}

export default Aside;