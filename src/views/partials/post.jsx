import React, { Component } from "react";

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow mb-5">
                    <div className="card-header">
                        <h2 className="card-title-article mb-0">
                            {this.props.post_title}
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-text mb-0 text-justify">
                            {this.props.post_content}
                        </p>
                        <p className="card-text mb-0 text-right">
                            <a href={this.props.post_url} className="text-decoration-none">See more</a>
                        </p>
                    </div>
                    <div className="card-footer">
                        <h5 className="mb-0">
                            <span className="badge badge-primary">
                                <a href={this.props.post_tag_url} className="text-decoration-none text-white badge-url">
                                    {this.props.post_tag}
                                </a>
                            </span>
                            <span className="badge badge-primary ml-3">
                                {this.props.post_time}
                            </span>
                        </h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Post;