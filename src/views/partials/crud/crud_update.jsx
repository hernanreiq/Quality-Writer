import React, { Component } from "react";
import { ToastAlert } from "../helpers/toast";
import { AxiosHTTP } from "../helpers/axios_http";

class Update extends Component {
    titleRef = React.createRef();
    topicRef = React.createRef();
    contentRef = React.createRef();

    componentDidUpdate() {
        this.assignData();
    }

    componentDidMount() {
        this.assignData();
    }

    assignData = () => {
        this.titleRef.current.value = this.props.post.title;
        this.topicRef.current.value = this.props.post.topic;
        this.contentRef.current.value = this.props.post.content;
    }

    updatePost = (e) => {
        e.preventDefault();
        var title = this.titleRef.current.value;
        var topic = this.topicRef.current.value;
        var content = this.contentRef.current.value;
        var idPost = this.props.post._id;
        if (title === '' || topic === '' || content === '') {
            ToastAlert('error', 'You can\'t do this update')
        } else if (title.length < 10 || content.length < 10 || topic === '') {
            ToastAlert('error', 'You can\'t do this update')
        } else {
            this.titleRef.current.value = '';
            this.contentRef.current.value = '';
            AxiosHTTP('PUT', 'http://localhost:3700/api/post/' + idPost, 'Your post has been updated successfully!', { title: title, topic: topic, content: content });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-6 mt-5 mb-3">
                    <div className="card shadow">
                        <div className="card-header bg-info text-center">
                            <h2 className="card-title mb-1">Update this post</h2>
                        </div>
                        <div className="card-body">
                            <form id="update-post" onSubmit={this.updatePost} autoComplete="off">
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
                            <button form="update-post" className="btn btn-info w-100 my-2 shadow" type="reset">Reset</button>
                            <button form="update-post" className="btn btn-success w-100 my-2 shadow" type="submit">Update</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Update;