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
                            {this.props.post.title}
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-text mb-0 text-justify">
                            {this.props.post.content.length > 70 && !this.state.textReduce ?
                                this.props.post.content.substring(0, 70) + '...' : this.props.post.content
                            }
                        </p>
                        {this.props.post.content.length > 70 && !this.state.textReduce ?
                            <div className="d-block text-right mt-3">
                                <button onClick={this.seeMore} className="btn btn-primary">See more</button>
                            </div> : ''
                        }
                    </div>
                    <div className="card-footer">
                        <h5 className="mb-0">
                            <span className="badge badge-primary">
                                <a href={'/' + this.props.post.topic} className="text-decoration-none text-white badge-url">
                                    {this.props.post.topic}
                                </a>
                            </span>
                            {this.props.post.edited === true ?
                                <span className="badge badge-secondary ml-3">Edited</span> : <span className="badge badge-success text-dark ml-3">Original</span>
                            }
                            <span className="badge badge-primary ml-3">
                                {format(this.props.post.created_at, 'en_US')}
                            </span>
                        </h5>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Post;