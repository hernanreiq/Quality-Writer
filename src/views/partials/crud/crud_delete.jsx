import React, { Component } from "react";
import { AxiosHTTP } from "../helpers/axios_http";

class Delete extends Component {
    deletePost = (e) => {
        e.preventDefault();
        var idPost = this.props.post._id;
        AxiosHTTP('DELETE', 'http://localhost:3700/api/post/' + idPost, 'Your post has been deleted successfully!', {id: idPost});
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-6 mt-5 mb-3">
                    <div className="card shadow">
                        <div className="card-header bg-danger text-center">
                            <h2 className="card-title mb-1">Delete this post</h2>
                        </div>
                        <div className="card-body">
                            <form id="delete-post" autoComplete="off" onSubmit={this.deletePost}>
                                <h4>Are you sure you want to delete this post?</h4>
                                <h5 className="text-primary text-center"><span className="text-light">"</span>{ this.props.post.title }<span className="text-light">"</span></h5>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button type="submit" form="delete-post" className="btn btn-danger w-100 my-2 shadow">Delete</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Delete;