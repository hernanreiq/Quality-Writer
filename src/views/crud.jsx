import React, { Component } from "react";
import Create from "./partials/crud_create";
import Read from "./partials/crud_read";
import Update from "./partials/crud_update";
import Delete from "./partials/crud_delete";

class CRUD extends Component {
    render(){
        return(
            <React.Fragment>
                { this.props.view === "Create" &&
                    <Create />
                }
                {this.props.view === "Read" &&
                    <Read />
                }
                {this.props.view === "Update" &&
                    <Update />
                }
                {this.props.view === "Delete" &&
                    <Delete />
                }
            </React.Fragment>
        )
    }
}

export default CRUD;