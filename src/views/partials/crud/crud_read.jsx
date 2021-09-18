import React, { Component } from "react";
import Post from "../post";

class Read extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 my-3">
                    <Post
                        post_title={this.props.post.title}
                        post_content={this.props.post.content}
                        post_topic={this.props.post.topic}
                        post_time={this.props.post.created_at}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Read;