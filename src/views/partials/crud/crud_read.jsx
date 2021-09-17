import React, { Component } from "react";
import axios from "axios";
import DataSearched from "../search/data_searched";

class Read extends Component {
    state = {
        posts: [],
        error: true
    }
    getAllPost = () => {
        axios.get('http://localhost:3700/api/posts')
            .then(res => {
                this.setState({
                    posts: res.data,
                    error: false
                })
            })
    }
    render() {
        if (this.state.error) {
            this.getAllPost();
        }
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card shadow my-5">
                        <div className="card-header bg-info text-center">
                            <h2 className="card-title mb-1">View all posts</h2>
                        </div>
                        <div className="card-body">
                            {this.state.error === false &&
                                this.state.posts.map((post, i) => {
                                    return (
                                        <DataSearched
                                            key={i}
                                            index={i}
                                            title={post.title}
                                            topic={post.topic}
                                            id={post._id}
                                        />
                                    )
                                })
                            }
                            {this.state.error &&
                                <h3 className="my-2 text-center">There is no post created</h3>
                            }
                        </div>
                        <div className="card-footer">
                            <button onClick={this.getAllPost} className="btn btn-success w-100 my-2 shadow">Refresh</button>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Read;