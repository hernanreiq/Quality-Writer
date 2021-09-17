import React, { Component } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2";

class Create extends Component {
    state = {
        postSaved: false
    }

    titleRef = React.createRef();
    topicRef = React.createRef();
    contentRef = React.createRef();

    createPost = (e) => {
        e.preventDefault();
        var title = this.titleRef.current.value;
        var topic = this.topicRef.current.value;
        var content = this.contentRef.current.value;
        if (title === '' || topic === '' || content === '') {
            this.toastAlert('error', 'Your post should be broader')
        } else if (title.length < 10 || content.length < 10 || topic === '') {
            this.toastAlert('error', 'Your post should be broader')
        } else {
            this.titleRef.current.value = '';
            this.contentRef.current.value = '';
            axios({
                method: 'POST',
                url: 'http://localhost:3700/api/post',
                data: {
                    title: title,
                    topic: topic,
                    content: content
                }
            });
            this.toastAlert('success', 'Your post has been created successfully!')
            setTimeout(() => {
                window.location.replace('/home');
            }, 5000);
        }
    }

    toastAlert = (typeIcon, toastMessage) => {
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
            icon: typeIcon,
            title: toastMessage
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="card shadow my-5">
                        <div className="card-header bg-success text-center">
                            <h2 className="card-title mb-1">Create a new post</h2>
                        </div>
                        <div className="card-body">
                            <form id="create-post" onSubmit={this.createPost} autoComplete="off">
                                <div className="form-group">
                                    <input placeholder="Title" name="title" ref={this.titleRef} type="text" className="form-control" required autoFocus />
                                </div>
                                <div className="form-group">
                                    <select name="topic" ref={this.topicRef} className="form-control" required>
                                        <option value="Science">Science</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Business">Business</option>
                                        <option value="Cinema">Cinema</option>
                                        <option value="Entertainment">Entertainment</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Content" name="content" ref={this.contentRef} className="form-control" required></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button form="create-post" className="btn btn-info w-100 my-2 shadow" type="reset">Reset</button>
                            <button form="create-post" className="btn btn-success w-100 my-2 shadow" type="submit">Create this post</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Create;