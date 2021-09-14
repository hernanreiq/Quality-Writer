import React, { Component } from "react";

class TableRead extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.index + 1}</th>
                <td>{this.props.title}</td>
                <td>{this.props.topic}</td>
                <td>{this.props.id}</td>
            </tr>
        )
    }
}

export default TableRead;