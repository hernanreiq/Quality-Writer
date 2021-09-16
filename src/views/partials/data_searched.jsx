import React, { Component } from "react";

class DataSearched extends Component {
    state = {
        classNameRow: "row p-1 my-2"
    }

    changeBackground = () => {
        if((this.props.index % 2) === 0){
            this.setState({
                classNameRow: "row p-1 my-2 bg-secondary"
            })
        }
    }

    componentDidMount(){
        this.changeBackground();
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.classNameRow}>
                    <div className="col-md-7 my-1">{this.props.title}</div>
                    <div className="col-md-3 my-1">{this.props.topic}</div>
                    <div className="col-md-2 my-1">{this.props.id}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default DataSearched;