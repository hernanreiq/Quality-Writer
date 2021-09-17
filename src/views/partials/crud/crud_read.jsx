import React, { Component } from "react";
import Post from "../post";

class Read extends Component {
    render(){
        return(
            <React.Fragment>
                <Post 
                    post_title={this.props.post.title}
                    post_content={this.props.post.content}
                    post_tag={this.props.post.topic}
                    post_time={this.props.post.created_at}
                />
            </React.Fragment>
        )
    }
}

export default Read;