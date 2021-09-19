import React, { Component } from "react";
import { format } from 'timeago.js';

class Post extends Component {
    state = {
        textReduce: false
    }

    seeMore = () => {
        this.setState({
            textReduce: true
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="card shadow mb-3">
                    <div className="card-header">
                        <h2 className="card-title-article mb-0">
                            {this.props.post_title}
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-text mb-0 text-justify">
                            {this.props.post_content.length > 70 && !this.state.textReduce ?
                                this.props.post_content.substring(0, 70) + '...' : this.props.post_content
                            }
                        </p>
                        {this.props.post_content.length > 70 && !this.state.textReduce ?
                            <div className="d-block text-right mt-3">
                                <button onClick={this.seeMore} className="btn btn-primary">See more</button>
                            </div> : ''
                        }
                    </div>
                    <div className="card-footer">
                        <h5 className="mb-0">
                            <span className="badge badge-primary">
                                <a href={'/' + this.props.post_topic} className="text-decoration-none text-white badge-url">
                                    {this.props.post_topic}
                                </a>
                            </span>
                            <span className="badge badge-primary ml-3">
                                {format(this.props.post_time, 'en_US')}
                            </span>
                        </h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Post;