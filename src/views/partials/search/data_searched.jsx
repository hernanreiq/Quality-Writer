import React, { Component } from "react";

class DataSearched extends Component {
    state = {
        classNameRow: "row p-1 my-2 bg-secondary-2"
    }

    changeBackground = () => {
        if ((this.props.index % 2) === 0) {
            this.setState({
                classNameRow: "row p-1 my-2 bg-secondary"
            })
        }
    }

    componentDidMount() {
        this.changeBackground();
    }
    
    readPost = () => {
        this.props.getClickedPost(this.props.post, 'read');
    }
    
    updatetPost = () => {
        this.props.getClickedPost(this.props.post, 'update');
    }
    
    deletePost = () => {
        this.props.getClickedPost(this.props.post, 'delete');
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.classNameRow}>
                    <div className="col-md-7 my-1">{this.props.post.title}</div>
                    <div className="col-md-2 my-1">{this.props.post.topic}</div>
                    <div className="col-md-3 my-1 text-center">
                        <button onClick={this.deletePost} className="btn btn-dark mx-2 py-2 text-danger"><i className="h4 mb-0 far fa-trash-alt"></i></button>
                        <button onClick={this.updatetPost} className="btn btn-dark mx-2 py-2 text-info"><i className="h4 mb-0 fas fa-edit"></i></button>
                        <button onClick={this.readPost} className="btn btn-dark mx-2 py-2 text-success"><i className="h4 mb-0 fas fa-eye"></i></button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DataSearched;