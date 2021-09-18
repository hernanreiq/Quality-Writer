import React, { Component } from "react";
import Create from "./partials/crud_create";
import Read from "./partials/crud/crud_read";
import Search from "./partials/search/search";

class CRUD extends Component {
    state = {
        post: {},
        actionClicked: null,
        seeMoreReseted: false,
        postExist: false
    }
    getClickedPost = (post, action) => {
        this.setState({
            post: post,
            actionClicked: action,
            postExist: true
        })
    }
    changePostExist = (value) => {
        this.setState({
            postExist: value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {this.state.postExist && this.state.actionClicked === 'read' &&
                            <Read post={this.state.post} />
                        }
                        {this.state.postExist === false &&
                            <Create />
                        }
                        <Search getClickedPost={this.getClickedPost} changePostExist={this.changePostExist} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CRUD;