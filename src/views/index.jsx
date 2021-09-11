import React, { Component } from "react";
import Footer from "./partials/footer";
import Aside from "./partials/aside";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <main className="p-4">
                                <h1>Index</h1>
                            </main>
                        </div>
                        <div className="col-md-4">
                            <Aside />
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;