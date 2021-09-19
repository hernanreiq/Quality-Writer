import React, { Component } from "react";
import Create from "./partials/crud/crud_create";
import Read from "./partials/crud/crud_read";
import Update from "./partials/crud/crud_update";
import Delete from "./partials/crud/crud_delete";
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
                        {this.state.postExist === false &&
                            <Create />
                        }
                        {this.state.postExist && this.state.actionClicked === 'read' &&
                            <Read post={this.state.post} />
                        }
                        {this.state.postExist && this.state.actionClicked === 'update' &&
                            <Update post={this.state.post} />
                        }
                        {this.state.postExist && this.state.actionClicked === 'delete' &&
                            <Delete post={this.state.post} />
                        }
                        <Search getClickedPost={this.getClickedPost} changePostExist={this.changePostExist} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CRUD;