import React, { Component } from "react";
import SweetAlert from "sweetalert2";

class Create extends Component {
    createPost = (e) => {
        e.preventDefault();
        this.confirmation();
    }
    confirmation = () => {
        const Toast = SweetAlert.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', SweetAlert.stopTimer)
                toast.addEventListener('mouseleave', SweetAlert.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Post created successfully!'
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card shadow my-5">
                                <div className="card-header bg-success text-center">
                                    <h2 className="card-title mb-1">Create a new post</h2>
                                </div>
                                <div className="card-body">
                                    <form id="create-post">
                                        <div className="form-group">
                                            <input placeholder="Title" name="title" type="text" className="form-control" required/>
                                        </div>
                                        <div className="form-group">
                                            <select name="topic" className="form-control" required> 
                                                <option disabled selected>Choose a topic</option>
                                                <option value="Science">Science</option>
                                                <option value="Technology">Technology</option>
                                                <option value="Business">Business</option>
                                                <option value="Cinema">Cinema</option>
                                                <option value="Entertainment">Entertainment</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <textarea placeholder="Content" className="form-control" required></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <a href="/home" className="btn btn-primary w-100 my-2 shadow">Home</a>
                                    <a href="/home" className="btn btn-info w-100 my-2 shadow">Reset</a>
                                    <button form="create-post" className="btn btn-success w-100 my-2 shadow" onClick={this.createPost}>Create this post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Create;