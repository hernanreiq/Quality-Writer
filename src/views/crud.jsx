import React, { Component } from "react";
import Create from "./partials/crud_create";
import Read from "./partials/crud/crud_read";
import Search from "./partials/search/search";

class CRUD extends Component {
    state = {
        post: {},
        postExist: false
    }
    getClickedPost = (post) => {
        this.setState({
            post: post,
            postExist: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Create />
                        {this.state.postExist &&
                            <Read post={this.state.post} />
                        }
                        <Search getClickedPost={this.getClickedPost} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CRUD;