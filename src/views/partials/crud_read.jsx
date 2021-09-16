import React, { Component } from "react";
import axios from "axios";
import DataSearched from "./data_searched";

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
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card shadow my-5">
                                <div className="card-header bg-success text-center">
                                    <h2 className="card-title mb-1">View all posts</h2>
                                </div>
                                <div className="card-body p-0 m-0">
                                    {this.state.error === false &&
                                        <table className="table table-dark mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Topic</th>
                                                    <th scope="col">View</th>
                                                </tr>
                                            </thead>
                                            {this.state.error === false &&
                                                <tbody>
                                                    {
                                                        this.state.posts.map((post, i) => {
                                                            return (
                                                                <DataSearched
                                                                    key={i}
                                                                    title={post.title}
                                                                    topic={post.topic}
                                                                    id={post._id}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            }
                                        </table>
                                    }
                                    {this.state.error &&
                                        <h3 className="my-2 text-center">There is no post created</h3>
                                    }
                                </div>
                                <div className="card-footer">
                                    <button onClick={this.getAllPost} className="btn btn-success w-100 my-2 shadow">Refresh</button>
                                    <a href="/home" className="btn btn-primary w-100 my-2 shadow">Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment >
        )
    }
}

export default Read;