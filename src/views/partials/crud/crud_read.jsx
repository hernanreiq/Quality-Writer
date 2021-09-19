import React, { Component } from "react";
import Post from "../post";

class Read extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-6 mt-5">
                    <Post
                        post={this.props.post}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Read;